# Şeker Sayıcı (sunucusuz sürüm)

Yemek fotoğrafından ya da yazısından karbonhidrat tahmini yapar, hızlı insülin için doz **aralığı** gösterir ve aldığın dozu telefonda kaydeder.

Bu klasör GitHub Pages'te yayınlanır. Sunucu yoktur: yemek analizi telefondan **doğrudan Google Gemini'ye** gider. Ayarlar, oranlar, öğün kayıtları ve Gemini anahtarı yalnızca telefonda durur.

## Kurulum

1. GitHub'da **herkese açık (Public)** yeni bir depo aç. Adı `seker` olsun (adres `https://KULLANICIADIN.github.io/seker/` olur). "Add a README" kutusunu işaretleme.
2. Bu klasörün **içindekileri** (zip'in kendisini ya da dış klasörü değil) depoya sürükleyip yükle ve **Commit changes** de: `index.html`, `sw.js`, `manifest.webmanifest`, `icon-180.png`, `icon-192.png`, `icon-512.png`, `README.md`.
3. Depoda **Settings** → **Pages** → **Source:** "Deploy from a branch" → **Branch:** `main`, klasör `/ (root)` → **Save**. Bir iki dakika sonra sayfayı yenile, üstte "Your site is live at …" adresi görünür.
4. Adresi iPhone'da **Safari**'de aç. "Uygulamayı telefonuna ekle" penceresi çıkar: **Paylaş** → **Ana Ekrana Ekle** → **Ekle**.
5. Ana ekrandaki simgeden aç. Uyarı ekranını oku, kutuyu işaretle, **Gemini API anahtarını** yapıştır, **Başla**.
6. **Ayarlar** sekmesinde kendi oranlarını ve en yüksek tek dozu gir, **Bağlantıyı dene**'ye dokun, **Ayarları kaydet**.

## Gemini anahtarı (ücretsiz)

aistudio.google.com/apikey adresinde Google hesabınla **Create API key** de. Faturalandırmayı açmadığın sürece ücretsiz katmanda kalır, ücret çıkmaz. Kota dolarsa uygulama "bugünlük ücretsiz sınıra ulaşıldı" der, ertesi gün düzelir. Ayarlar'daki **Model** alanına `gemini-3.5-flash-lite` yazarak daha hafif modele geçilebilir.

Anahtarı telefona özel bir mesajla gönder, yapıştırdıktan sonra mesajı sil. Anahtar sızarsa AI Studio'dan silip yenisini al.

## Gizlilik

Ücretsiz katmanda Google, gönderilen içeriği (yemek fotoğrafları ve yazıları) kendi ürünlerini geliştirmek için kullanabilir ve insan gözden geçirenler okuyabilir. Uygulama isim, şeker değeri, doz ya da oran göndermez.

## Güncelleme

Depodaki dosyaları değiştirip commit et. Telefonda uygulamayı kapatıp açınca yeni sürüm gelir.

## Sınırlar

- Hazır oran aralığı (1 ünite = 10–15 g karbonhidrat, 25–50 mg/dL) kişiye özel değildir. Kullanan kişi doktorunun verdiği oranları Ayarlar'a girmelidir.
- Hedef şeker boşsa şeker düzeltmesi hesaplanmaz.
- Uygulama silinirse ya da Safari verisi temizlenirse kayıtlar gider. **Kayıt** sekmesindeki **Kaydı kopyala** ile ara sıra yedek al.
- Yemek tanıma yanılabilir, kalemleri ve gramları her seferinde kontrol et.
