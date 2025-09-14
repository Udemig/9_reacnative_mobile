# Redux Thunk ve Firebase Kombinasyonu ile Auth

- Öncelikle Firebase'in Auth(yetkilendirme) modülünü kurarız.
- Örnek bir Login isteği atarız, gelen cevabı inceleriz.
- Ardından bu cevaba uygun bir Redux Thunk oluştururuz.
- Thunk'ın döndürdüğü cevaba göre de extraReducers kısmında kullanıcı verimizi store'da saklayan bir case oluştururuz.