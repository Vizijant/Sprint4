# Sprint4
1. Veiksmas
Paskelbiu du kintamuosius per input ir button id
Sekančią Const paskelbsiu per class (kad pasigilinti)nors galėčiau ir per Id.
2. Veiksmas
Paskelbiu funkciją konstruktorių, kad inicijuoti, kada užbaigtas Task(-užduotis) kada ne.
Funkcija apibudinam -"Description"(tai tas apibudinimas, kuris pareis iš inputo.
Kai Task susikuria  numatyta reikšmė bus false.
3. Veiksmas
Nuspaudus  addTaskBtn, description, turės fiksuotis objekte, kurį siusime į masyvą,ir kas kart naujai sukurtas Task keliaus kaip naujas objektas į masyvo galą , 

Kad sukurta objekta, galėtume siusti į masyvą, tam sukuriame kintamaji, kuriam pradžiai suteikiame reikšmę tuščio masyvo. Veliau tai keisim.  

Nuspaudus  addTaskBtn pirmiausia išklausysime renginį-event('click'-paspaudimas) po ko vidinėje funkcijoje, kuri bus iššaukiama paspaudus addTaskBtn, objektą, kuri sukursime konstruktoriumi(description), siūsime į let kintamuoju sukurtą tuščią masyvą "tasks" 

Masyvui tasks priskiriame metodą push, metodas push siunčia i masyvo galą objektą.
Kurdami naują objektą su funkcija new Task
Perduodame jai pradžioje sukurto kintamojo mazgą , inputo'description-task' su numatyta verte value

4. Veiksmas
tasks masyvą siūsiu į Local Storage ir paskui iš ten imsime reikiamus objektus
Kiek aukščiau pateiksime funkciją, kuri mums būs reikalinga ir kituose dalyse.

Kreipiames i globaline mums prieinamą localStorage,  su metodu setItem kuriuo(viduje) perduodame dvi prasmes (key: string, value: string) key- pervadinsime į mūsu uždavinį('tasks'), (antrają reikšmę reiktu paduoti JSON formatu. Todėl masyvą tasks  turime perfarmatuoti į JSON ir tik tada nusiūsti į  Local Storage
updateLocal iššaukiam būten tada kai suveikia tasks.push
Patikriname serveryje(Application =>Local Storage
