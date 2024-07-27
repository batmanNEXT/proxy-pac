function FindProxyForURL(url, host) {
    // Proxy server settings
    var proxy = "PROXY proxy.example.com:8080";

    // List of domains to use the proxy
    var domains = [
        ".facebook.com",
        ".fbcdn.net",
        ".facebook.net",
        ".telegram.org",
        ".whatsapp.com",
        ".whatsapp.net"
    ];

    // Check if the host matches any of the domains
    for (var i = 0; i < domains.length; i++) {
        if (dnsDomainIs(host, domains[i])) {
            return proxy;
        }
    }

    // Default: Use direct connection
    return "DIRECT";
}