---
title: "WAF Analyzer for OPNsense"
weight: 50
---
**os-waf-analyzer** is an OPNsense plugin that reviews your os-nginx access logs on demand and suggests narrowly scoped WAF path rules. It adds **Services → WAF Analyzer → Suggestions**.

- Looks only at well-known sensitive paths such as `/.git`, `/.env`, `/wp-login.php` and `/phpmyadmin`
- Every suggestion shows hit counts, source IPs, timestamps, user agents and a confidence level with a plain-language reason
- Read-only: suggestions are never stored or applied automatically

The release archive contains the plugin source. Build it inside an [opnsense/plugins](https://github.com/opnsense/plugins) checkout with `make package`.
