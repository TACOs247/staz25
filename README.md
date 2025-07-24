 strona zapisuje dane w localStorage przegladarki uzytkownika
 dane sa dostepne tylko na tym konkretnym urzadzeniu 
 dane sa przechowywane dopoki urzytkownik ich nie usunie
 -czyszczenie ręczne pamięć przeglądarki (Clear site data, Clear local storage)

 -Jeśli odpalisz swoją stronę z innej przeglądarki lub telefonu – dane będą puste, bo localStorage nie jest współdzielony.

 Rozwiazanie problemu 
Jeśli chcesz trwałego przechowywania lub synchronizacji między urządzeniami, potrzebujesz:
Back-endu (np. Firebase, Supabase, baza danych)
