# Banner Grabbing Techniques

**Tags:** #seedling #INT245 #security #recon

## Step 6 — Banner Grabbing 

Here are four common ways to grab service banners from a target (`192.168.56.102`).

**a) Netcat:**
```bash
nc -nv 192.168.56.102 22
nc -nv 192.168.56.102 21
nc -nv 192.168.56.102 80
```

**b) curl:**
```bash
curl -I http://192.168.56.102
curl -sv http://192.168.56.102 2>&1 | grep -E "Server:|< HTTP"
```

**c) wget:**
```bash
wget -S -q -O /dev/null http://192.168.56.102 2>&1
```

**d) Nmap NSE Banner Script:**
```bash
nmap -sV --script=banner 192.168.56.102
nmap -p 21,22,23,80,3306,8180 --script=banner 192.168.56.102
```
