# Security Policy

## Supported versions

Security fixes are applied to the live deployment branch only.

| Branch | Supported |
| --- | --- |
| `production` | Yes |
| `stage` | Best effort during active releases |
| `dev` | No |

## Reporting a vulnerability

**Do not open a public GitHub issue for security reports.**

If you believe you have found a security vulnerability in this repository or on [haroonabidawan.com](https://haroonabidawan.com):

1. Email or message via [haroonabidawan.com/contact](https://haroonabidawan.com/contact) with **Security report** in the subject or opening line.
2. Include a clear description of the issue, steps to reproduce, and impact if known.
3. Allow reasonable time for investigation and remediation before public disclosure.

## What to expect

- Acknowledgment within **5 business days**
- Status updates as the report is triaged and fixed
- Credit in release notes if you want it and the report is valid

## Out of scope

The following are generally out of scope unless they demonstrate meaningful impact:

- Missing security headers on static marketing pages with no user accounts
- Social engineering or physical attacks
- Denial of service against infrastructure you do not own
- Issues in third-party services (Vercel, GitHub, analytics providers) unless introduced by this codebase

## Safe harbor

Good-faith security research that follows this policy will not be pursued legally. Do not access data that is not yours, disrupt production services, or exploit issues beyond what is needed to demonstrate the vulnerability.
