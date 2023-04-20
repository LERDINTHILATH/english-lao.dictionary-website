
const words = [
    {
        word:'SMALL',
        wordlao:'ຂະໜາດນ້ອຍ',
        description :' of a mount that is less than normal',
        senten:'rabbit is a smal animal',

    },
    {
        word:'GARDEN',
        wordlao:'ສວນ',
        description:' a piece of ground for growing flower',
        senten:'my sister grows flowers in her garden', 
    },
    {
        word:'FINAL',
        wordlao:'ຄັ້ງສຸດທ້າຍ',
        description:' last, ultimate',
        senten:"my father's answer is final",
    },
    {
        word:'CARE',
        wordlao:'ດູແລ',
        description:'maintenance, nursing',
        senten:"i don't care for her",
    },
    {
        word:'EVERYBODY',
        wordlao:'ທຸກຄົນ',
        description:'every person',
        senten:'everybody saw it',
    },
    {
        word:'DRIVE',
        wordlao:'ຂັບລົດ',
        description:'operate the direction',
        senten:'i drive for an hour',
    },
    {
        word:'APPEAR',
        wordlao:'ປະກົດ',
        description:'come out',
        senten:'please read them if they appear',
    },
    {
        word:'BUT',
        wordlao:'ແຕ່ວ່າ',
        description:'it is used to jion two ideas that are opposite',
        senten:' i am very hungry, but the fridge is empty',
    },
    {
        word:'HOUSE',
        wordlao:'ເຮືອນ',
        description:'a building for human habitation',
        senten:' three families live in the same house',
    },
    {
        word:'HOSPITAL',
        wordlao:'ໂຮງໝໍ',
        description:'an institution for providing medical treament',
        senten:'We are going to take you to the hospital',
    },
    {
        word:'PEOPLE',
        wordlao:'ຄົນ',
        description:'human being',
        senten:"i think the people who that live on the island are very friendly",
    },
    {
        word:'PRIVATE',
        wordlao:'ສ່ວນຕົວ',
        description:'special, exclusive',
        senten:' all bedrooms have private facilities ',
    },
    {
        word:'REGION',
        wordlao:'ພາກພື້ນ, ເຂດ',
        description:'an area or division',
        senten:'it is the biggest sports shop in the region',
    },
    {
        word:'STUDENT',
        wordlao:'ນັກຮຽນ',
        description:'a person that is studying at a school or colleg',
        senten:' she was a good student and a good footballer',
    },
    {
        word:'WEAR',
        wordlao:'ສວມໃສ່',
        description:'draw on',
        senten:' she is wearing a blue jacket',
    },
    {
        word:'WRITE',
        wordlao:'ຂຽນ',
        description:'mark on paper',
        senten:'i could write you a note if it would help',
    },
    {
        word:'UNDER',
        wordlao:'ຂ້າງລຸ່ມ,ພາຍໃຕ້',
        description:'below, beneath,lower than',
        senten:"You're living under the same roof",
    },
    {
        word:'THINK',
        wordlao:'ຄິດ',
        description:'cosider, contemplate',
        senten:'i think, this is impossible',
    },
    {
        word:'SUPPORT',
        wordlao:'ສະໜັບສະໜູນ',
        description:'to assistance',
        senten:'you know i always support you',
    },
    {
        word:'SOULMATE',
        wordlao:'ເນື້ອຄູ່',
        description:'a person ideally suited to another as a close friend or romantic partner.',
        senten:' Love is your true soulmate, fear is your great soul enemy. ',
    },
    {
        word:'SIZE',
        wordlao:'ຂະໜາດ',
        description:'dimensions',
        senten:' we usually take size seven shoes',
    },
    {
        word:'REDUCE',
        wordlao:'ຫຼຸດຜ່ອນ',
        description:'decrease, abate',
        senten:'football is good for reducing stress',
    },
    {
        word:'PRICE',
        wordlao:'ລາຄາ',
        description:'cost, terms',
        senten:'what is the price',
    },
    {
        word:'OUT',
        wordlao:'ອອກ',
        description:'abroad, exit',
        senten:'he walked out into the street',
    },
    {
        word:'MOVIE',
        wordlao:'ໜັງ',
        description:'flim',
        senten:'they love movies',
    },
    {
        word:'LAWYER',
        wordlao:'ທະນາຍຄວາມ',
        description:'attorney or counselor',
        senten:'please, talk to my lawyer',
    },
    {
        word:'INSIDE',
        wordlao:'ຂ້າງໃນ, ພາຍໃນ',
        description:'in, within',
        senten:'my mother went inside ',
    },
    {
        word:'GENERAL',
        wordlao:'ທົ່ວໄປ',
        description:'public, not special',
        senten:'the general manager is the meeting room',
    },
    {
        word:'FUTILE',
        wordlao:'ບໍ່ມີປະໂຫຍດ',
        description:'vain, useless',
        senten:'he sighed at the futile thoughts',
    },
    {
        word:'FAMILY',
        wordlao:'ຄອບຄົວ',
        description:'parents and children living together in a household',
        senten:' my sister gets up earliest in my family ',
    },
    {
        word:'ENJOY',
        wordlao:'ມ່ວນ,ເພີດເພີນ',
        description:'delight',
        senten:'i enjoy movies',
    },
    {
        word:'DISCOVER',
        wordlao:'ຄົນພົບ',
        description:'work out, explore',
        senten:'i am not able to discover it',
    },
    {
        word:'COMMOON',
        wordlao:'ທຳມະດາ, ທົ່ວໄປ',
        description:'mutual, agrees',
        senten:' she has a common name',
    },
    {
        word:'BUY',
        wordlao:'ຊື້',
        description:'purchase',
        senten:'wine is rarely a good buy in duty-free shops',
    },
    {
        word:'BORN',
        wordlao:'ກຳເນີດ',
        description:'existing as a result of birth',
        senten:' she was born in laos',
    },
    {
        word:'ask',
        wordlao:'ຖາມ',
        description:'inquire',
        senten:'we will ask my teacher',
    },
    {
        word:'AGAIN',
        wordlao:'ອີກຄັ້ງ',
        description:'another time',
        senten:' please repeat again',
    },
    {
        word:'BREAK',
        wordlao:'ທຳລາຍ, ຫຍຸດພັກ',
        description:'separate or cause to separate into pieces as a result of a blow, shock, or strain',
        senten:' windows in the street were broken by the blast',
    },
    {
        word:'CONTINUE',
        wordlao:'ດຳເນີນການຕໍ່',
        description:'proceed, keep going',
        senten:' we will continue later',
    },
    {
        word:'LATER',
        wordlao:'ພາຍຫຼັງ',
        description:'at a time in the near future',
        senten:"i'll see you later",
    },
    {
        word:'DIRECTION',
        wordlao:'ທິດທາງ',
        description:'a course along which someone or something moves',
        senten:'she set off in the opposite direction',
    },
    {
        word:'EXAMPLE',
        wordlao:'ຕົວຢ່າງ',
        description:'sample, instance',
        senten:'they have to set a good example',
    },
    {
        word:'FINANCIAL',
        wordlao:'ການເງິນ',
        description:'fiscal',
        senten:'everybody need some financial advice',
    },
    {
        word:'GOVERNMENT',
        wordlao:'ລັດຖະບານ',
        description:'administrator',
        senten:'public opinion can force the government into action',
    },
    {
        word:'HUNDRED',
        wordlao:'ໜຶ່ງຮ້ອຍ',
        description:'100',
        senten:'we have a hundred kip in cash',
    },
    {
        word:'IMPROVE',
        wordlao:'ພັດທະນາ',
        description:'achieve or produce something better than',
        senten:'they are trying to improve on the tired old style',
    },
    {
        word:'LEAVE',
        wordlao:'ອອກໄປ, ປະຈາກ',
        description:'release, quit',
        senten:'i am sorry but i must leave',
    },
    {
        word:'QUIT',
        wordlao:'ເຊົາ, ລົ້ມເລີກ',
        description:'to stop doing something or leave a job or a place',
        senten:'Many smokers have used willpower to try to quit',
    },
    {
        word:'LOVE',
        wordlao:'ຮັກ',
        description:'affection, passion',
        senten:' i love you',
    },
    {
        word:'MOVE',
        wordlao:'ເຄື່ອນໄຫວ',
        description:'change position',
        senten:"nobady's moving",
    },
    {
        word:'LEARN',
        wordlao:'ຮຽນຮູ້',
        description:'find out information',
        senten:' i have to learn english',
    },
    {
        word:'NATIONAL',
        wordlao:'ແຫ່ງຊາດມ ລະດັບຊາດ',
        description:'a citizen of a particular country',
        senten:'germany national team logo gains the first star',
    },
    {
        word:'OFFER',
        wordlao:'ສະເໜີ',
        description:'an expression of readiness to do something if desired',
        senten:'i accepted the offer',
    },
    {
        word:'ONLY',
        wordlao:'ເທົ່ານັ້ນ',
        description:'no one or nothing more besides',
        senten:'there are only a limited number of tickets available',
    },
    {
        word:'OWN',
        wordlao:'ເປັນເຈົ້າຂອງ',
        description:'possess oneself of',
        senten:'she has her own room',
    },
    {
        word:'PAYMENT',
        wordlao:'ການຈ່າຍເງິນ,ການໃຊ້ຈ່າຍ',
        description:'the action or process of paying someone or something or of being paid',
        senten:'if you get behind in your car payment, the car may be repossessed',
    },
    {
        word:'POINT',
        wordlao:'ຈຸດ, ປະເດັນ',
        description:'a particular spot, place, or position in an area or on a map',
        senten:'turn left at the point where you see a sign to Appleford',
    },
    {
        word:'PROJECT',
        wordlao:'ໂຄງການ',
        description:'design, plan',
        senten:'a project to build a new power station',
    },
    {
        word:'RESEARCH',
        wordlao:'ວິໄຈ, ຄົ້ນຄ້ວາ',
        description:'investigate',
        senten:'the group carries out research in geochemistry',
    },
    {
        word:'SAY',
        wordlao:'ການເວົ້າ',
        description:'utter words so as to convey information, an opinion',
        senten:'my son says hello',
    },
    {
        word:'SELL',
        wordlao:'ການຂາຍ',
        description:'give in exchange for money',
        senten:' they had sold the car',
    },
    {
        word:'SHOW',
        wordlao:'ການເຜີຍແຜ່',
        description:'allow or cause (something) to be visible',
        senten:'Will you show me how to do that',
    },
    {
        word:'SUFFER',
        wordlao:'ທຸກທໍລະມານ',
        description:'experience or be subjected to (something bad or unpleasant',
        senten:'they are suffering from hunger',
    },
    {
        word:'TOWN',
        wordlao:'ເມືອງ',
        description:'the central part of a neighbourhood',
        senten:'was your university in town',
    },
    {
        word:'WATER',
        wordlao:'ນຳ້',
        description:'a stretch or area of water, such as a river, sea, or lake',
        senten:'can I have a drink of water',
    },
    {
        word:'WORLD',
        wordlao:'ໂລກ',
        description:'together with all of its people, and natural features etc..',
        senten:'we want to change the world ',
    },
    {
        word:'STORY',
        wordlao:'ເລື່ອງລາວ',
        description:'an account of imaginary or real people and events told for entertainment',
        senten:'the movie was based on a true story',
    },
    {
        word:'SKILL',
        wordlao:'ທັກສະ',
        description:'the ability to do something well',
        senten:'difficult work, taking great skill',
    },
    {
        word:'ABILITY',
        wordlao:'ຄວາມສາມາດ',
        description:'possession of the means or skill to do something',
        senten:'the manager had lost his ability to motivate the players',
    },
    {
        word:'REST',
        wordlao:'ພັກຜ່ອນ',
        description:'cease work or movement in order to relax, sleep, or recover strength',
        senten :"I'm going to rest up before travelling to champasak",
    },
    {
        word:'EXHAUST',
        wordlao:'ເມື່ອຍລ້າ',
        description:'make (someone) feel very tired',
        senten:'her day out had exhausted her',
    },
    {
        word:'PRODUCT',
        wordlao:'ຜະລິດຕະພັນ',
        description:'an article or substance that is manufactured or refined for sale',
        senten:'the tax on these product is very high',
    },
    {
        word:'PRODUCE',
        wordlao:'ຜະລິດ',
        description:'make or manufacture from components or raw materials',
        senten:'the company have just produced a luxury version of the aircraft',
    },
    {
        word:'PERFORM',
        wordlao:'ດຳເນີນການ, ສະແດງ',
        description:'carry out, accomplish, or fulfil (an action, task, or function)',
        senten:' I have my duties to perform"',
    },
    {
        word:'MEAN',
        wordlao:'ຄວາມໝາຍ, ໝາຍເຖິງ',
        description:'intend to convey or refer to (a particular thing); signify',
        senten:'he was asked to clarify what his remarks meant',
    },
    {
        word:'LEVEL',
        wordlao:'ລະດັບ',
        description:'a position on a scale of amount',
        senten:' a high level of unemployment',
    },
    {
        word:'FRIENDLY',
        wordlao:'ເປັນມິດ',
        description:'kind and pleasan',
        senten:'the horse which she was riding is very friendly and beautiful',
    },
    {
        word:'FORCE',
        wordlao:'ບັງຄັບ,ຝືນ',
        description:'coercion or compulsion, especially with the use or threat of violence',
        senten:'they ruled by law and not by force',
    },
    {
        word:'ENOUGH',
        wordlao:'ພໍ, ພຽງພໍ',
        description:'as much or as many as required',
        senten:"there's too much work and not enough people to do it",
    },
    {
        word:'IDENTIFY',
        wordlao:'ແຍກແຍະ,ລະບຸ, ບົ່ງຕົວ',
        description:'establish or indicate who or what (someone or something) is',
        senten:'the judge ordered that the girl should not be identified',
    },
    {
        word:'HOUR',
        wordlao:'ຊົ່ວໂມງ',
        description:'clock',
        senten:'the clock in the sitting room struck the hour',
    },
    {
        word:'PRAY',
        wordlao:'ອະທິຖານ',
        description:'address a prayer to God or another deity',
        senten:' the whole family are praying for john',
    },
    {
        word:'REACH',
        wordlao:'ຮອດ, ບັນລຸ',
        description:'arrive at; get as far as',
        senten:' the show is due to reach our screens early next year',
    },
    {
        word:'GET',
        wordlao:'ໄດຮັບ',
        description:'come to have (something); receive',
        senten:' I got a letter from him the other day',
    },
    {
        word:'DETERMINE',
        wordlao:'ກຳນົດ',
        description:'ascertain or establish exactly by research or calculation',
        senten:' the point of our study was to determine what is true, not what is practicable',
    },
    {
        word:'AGREE',
        wordlao:'ເຫັນດີ',
        description:'have the same opinion about something; ',
        senten:'I completely agree with your recent editorial',
    },
    {
        word:'ARRIVE',
        wordlao:'ມາຮອດ,ຮອດ',
        description:'is to get to or reach some place',
        senten:'the bus always arrives at the corner of my street at 6:00',
    },
    {
        word:'ATTACK',
        wordlao:'ໂຈມຕີ',
        description:' is to try to fight or to hurt',
        senten:'the man with the sword attacked the other man first',
    },
    {
        word:'BOTTOM',
        wordlao:'ຢູ່ຂ້າງລຸ່ມ,',
        description:'the lowest part',
        senten:'the bottom of my shose has a hole in it',
    },
    {
        word:'clever',
        wordlao:'ສະຫຼາດ',
        description:'when someone is clever, they can solve a hard puzzle or problem',
        senten:'the clever boy thought of good idea',
    },
    {
        word:'CRUEL',
        wordlao:'ໂຫດຮ້າຍ',
        description:'to do bad things to hurt others',
        senten:' the cruel man yelled at his sister',
    },
    {
        word:'HIDE',
        wordlao:'ຫຼົບ, ລີ້',
        description:'try not to let others see you',
        senten:'the other chidren will hide while you count to 10',
    },
    {
        word:'HUNT',
        wordlao:'ລ່າ',
        description:'look for or search for something to kill',
        senten:'long ago, people hunted with bows and arrows',
    },
    {
        word:'MIDDLE',
        wordlao:'ກາງ',
        description:'the center or halfway point',
        senten:'the canadian flag has a maple leaf in the middle of it',
    },
    {
        word:'PLEASEED',
        wordlao:'ເພິ່ງພໍໃຈ',
        description:'when someone is pleased, they are happy',
        senten:'she was pleased with the phone call she received',
    },
    {
        word:'PROMISE',
        wordlao:'ສັນຍາ',
        description:'do something for sure',
        senten:'he promised to return my key by tomorrow',
    },
    {
        word:'RETURN',
        wordlao:'ສົ່ງຄືນ, ກັບຄືນ',
        description:'give, put, or send (something) back to a place or person',
        senten:'complete the application form and return it to this address',
    },
    {
        word:'REPLY',
        wordlao:'ຕອບກັບ',
        description:'say back to someone',
        senten:' she asked him what time his meeting was. he replied,"at three" ',
    },
    {
        word:'SAFE',
        wordlao:'ປອດໄພ',
        description:'when a person is safe, they are not in danger',
        senten:'put on your seat belt in the car to be safe',
    },
    {
        word:'TRICK',
        wordlao:'ເຫຼ້ຫຼຽ່ມ',
        description:'something you do to fool another person',
        senten:'his card trick really surprised us',
    },
    {
        word:'ADVENTURE',
        wordlao:'ປະຈົນໄພ',
        description:'a fun or exciting thing that you do',
        senten:'riding in the rough water was an adventure',
    },
    {
        word:'APPROACH',
        wordlao:'ເຂົ້າໃກ້',
        description:'move close to it',
        senten:'the boy approached his school',
    },
    {
        word:'CREATE',
        wordlao:'ສ້າງ',
        description:'make somthing new',
        senten:'she created an igloo from blocks of snow',
    },
    {
        word:'EXPERIMENT',
        wordlao:'ການທົດລອງ',
        description:'test that you do to see what will hapen',
        senten:'the student did an experiment in science class',
    },
    {
        word:'LAUGH',
        wordlao:'ການຫົວ',
        description:'when somone is happy or a funny thing occurs',
        senten:'the sound of their laugh filled the room',
    },
    {
        word:'LOUD',
        wordlao:'ສຽງດັງ',
        description:' it is strong and very easy th hear',
        senten:"the man's voice was so loud the we all could hear him",
    },
    {
        word:'HEAR',
        wordlao:'ໄດ້ຍິນ',
        description:'perceive with the ear the sound made by (someone or something)',
        senten:"behind her she could hear men's voices",
    },
    {
        word:'NERVOUS',
        wordlao:'ກັງວົນ',
        description:'when someone os nervous, they think something bad will happen',
        senten:'the boy become nervous when he heard the news',
    },
    {
        word:'excited',
        wordlao:'ຕື່ນເຕັ້ນ',
        description:'very enthusiastic and eager',
        senten:'they were excited about the prospect',
    },
    {
        word:'RECKLESS',
        wordlao:'ປະໝາດ',
        description:"heedless of danger or the consequences of one's actions",
        senten:"you mustn't be so reckless",
    },
    {
        word:'PARANOID',
        wordlao:'ວິຕົກກັງວົນ, ລະແວງ',
        description:'unreasonably or obsessively anxious, suspicious, or mistrustful',
        senten:' he has always been paranoid about his personal security',
    },
    {
        word:'NOISE',
        wordlao:'ສຽງລົບກວນ',
        description:'a sound, especially one that is loud or unpleasant or that causes disturbance',
        senten:'the crying baby made a loud noise',
    },
    {
        word:'FEAR',
        wordlao:'ຄວາມຍ້ານ',
        description:'be afraid of (someone or something) as likely to be dangerous',
        senten:'farmers fear that they will lose business',
    },
    {
        word:'SECRET',
        wordlao:'ຄວາມລັບ',
        description:'something that is kept or meant to be kept unknown or unseen by others',
        senten:'the two boys were sharing a secret',
    },
    {
        word:'SHOUT',
        wordlao:'ຮ້ອງໄສ່, ຕະຄອກ',
        description:'say something loudy',
        senten:'my boss shouted at me becayse i was late for work',
    },
    {
        word:'SMELL',
        wordlao:'ດົມກິ່ນ, ກິ່ນ',
        description:'use your nose to sense it',
        senten:'the two friends smelled the flower',
    },
    {
        word:'AMONG',
        wordlao:'ໃນລະຫວ່າງ',
        description:'if you are among certain things, they are all around you',
        senten:'there was a red apple among green ones',
    },
    {
        word:'CLOUD',
        wordlao:'ເມກ',
        description:'group of water drops in the sky',
        senten:'the sky was filled with white clouds',
    },
    {
        word:'FILL',
        wordlao:'ຕື່ມ',
        description:'cause (a space or container) to become full or almost full',
        senten:'I filled the bottle with water"',
    },
    {
        word:'COMPREHEND',
        wordlao:'ທຳຄວາມເຂົ້າໃຈ',
        description:'to understand it',
        senten:'john could not comprehend the message',
    },
    {
        word:'DESCRIBE',
        wordlao:'ອະທິບາຍ',
        description:'give a detailed account in words of',
        senten:'he described his experiences in a letter to his parents',
    },
    {
        word:'FAIL',
        wordlao:'ຫຼົ້ມເຫຼວ',
        description:'do not succeed in what you try to do',
        senten:'since he failed to get the job, he was sad',
    },
    {
        word:'INSTEAD',
        wordlao:'ແທນ, ແທນທີ່',
        description:'in place of',
        senten:'he ate the carrot instead of the ice cream',
    },
    {
        word:'LIBRARY',
        wordlao:'ຫ້ອງສະໝຸດ',
        description:'place where you go to read books',
        senten:'the library at school is full of books',
    },
    {
        word:'PLACE',
        wordlao:'ສະຖານທີ່',
        description:'a particular position, point, or area in space; a location',
        senten:"I can't be in two places at once",
    },
    {
        word:'PLANET',
        wordlao:'ດາວເຄາະ',
        description:'a large round thing in space',
        senten:'saturn is the planet with the ring around it',
    },
    {
        word:'REPORT',
        wordlao:'ລາຍງານ',
        description:'give a spoken or written account of something that one has observed, heard, done',
        senten:'police reported that the floods were abating ',
    },
    {
        word:'SOLVE',
        wordlao:'ແກ້ໄຂ',
        description:'to find an answer to it',
        senten:' all the students could easily solve the math problem ',
    },
    {
        word:'ANSWER',
        wordlao:'ຄຳຕອບ',
        description:'a thing that is said, written, or done as a reaction to a question',
        senten:'he knocked and entered without waiting for an answer',
    },
    {
        word:'APPROPRIATE',
        wordlao:'ສົມຄວນ, ເໝາະສົມ',
        description:'it is right or normal',
        senten:"it's appropriate to wear a suit when you go to the office",
    },
    {
        word:'AVOID',
        wordlao:'ຫຼີກລຽ້ງ',
        description:'to stay away from it',
        senten:' avoid the brokenbottle on the floor',
    },
    {
        word:'CONCERN',
        wordlao:'ກັງວົນ',
        description:'feeling of worry',
        senten:'i was filled with concern after reading the newpaper',
    },
    {
        word:'EXPECT',
        wordlao:'ຄາດຫວັງ',
        description:'believe it will happen',
        senten:'i expect the bus to br here very soon',
    },
    {
        word:'FREQUENTLY',
        wordlao:'ເປັນປະຈຳ',
        description:'it happen often',
        senten:'we meet frequently, either at rhe  beginning or ending of the week',
    },
    {
        word:'HABIT',
        wordlao:'ນິໃສ',
        description:'thing that you do often',
        senten:'smoking is a bad habit that can kill you',
    },
    {
        word:'INSTRUCK',
        wordlao:'ຄຳແນະນຳ',
        description:'tell or order someone to do something, especially in a formal or official way',
        senten:'she instructed him to wait',
    },
    {
        word:'ISSUE',
        wordlao:'ບັນຫາ',
        description:'an important topic or problem for debate or discussion',
        senten:'raising awareness of environmental issues"',
    },
    {
        word:'PATIENT',
        wordlao:'ອົດທົນ',
        description:"don't become angry or upset easily  ",
        senten:"i had to be patien and wait untill 5 o'clock to leave",
    },
    {
        word:'POSITIVE',
        wordlao:'ດີ, ໄປໃນທາງດີ',
        description:'it is good',
        senten:'she has a positive future ahead of her after finishing college',
    },
    {
        word:'PUNISH',
        wordlao:'ລົງໂທດ',
        description:'make someone suffer for breaking the ruls or laws',
        senten:'to punish me, my teacher had me stand in the corner',
    },
    {
        word:'LAW',
        wordlao:'ກົດໝາຍ',
        description:'a rule defining correct procedure or behaviour',
        senten:'shooting the birds is against the law',
    },
    {
        word:'ILLEGAL',
        wordlao:'ຜິດກົດໝາຍ',
        description:'contrary to or forbidden by law, especially criminal law:',
        senten:' illegal drugs',
    },
    {
        word:'ACT',
        wordlao:'ການກະທຳ',
        description:'take action; do something',
        senten:'we must act to reduce pollution',
    },
    {
        word:'REPRESENT',
        wordlao:'ຕົວແທນ',
        description:'to speak or act for a person or group',
        senten:'my lawyer will represent me in court',
    },
    {
        word:'PRIORITY',
        wordlao:'ລຳດັບຄວາມສຳຄັນ',
        description:'the fact or condition of being regarded or treated as more important than others',
        senten:'"the safety of the country takes priority over any other matter',
    },
    {
        word:'APPROVE',
        wordlao:'ອະນຸມັດ',
        description:'officially agree to or accept as satisfactory',
        senten:'the budget was approved by parliament',
    },
    {
        word:'SACRIFICE',
        wordlao:'ເສຍສະຫຼະ',
        description:'an act of giving up something valued for the sake of something else regarded as more important or worthy',
        senten:'we must all be prepared to make sacrifices',
    },
    {
        word:'SATISFIED',
        wordlao:'ພໍໃຈ',
        description:'contented, pleased',
        senten:' she was very satisfied with the results',
    },
    {
        word:'SARCASTIC',
        wordlao:'ປະຊົດປະຊັນ',
        description:'marked by or given to using irony in order to mock or convey contempt',
        senten:"I think they're being sarcastic",
    },
    {
        word:'PRIVILEGE',
        wordlao:'ສິດທິພິເສດ',
        description:'a special right, advantage, or immunity granted or available only to a particular person or group',
        senten:'he has been accustomed all his life to wealth and privilege"',
    },
    {
        word:'ACCURATE',
        wordlao:'ແມ໋ນຍຳ, ຖືກຕ້ອງ',
        description:'(especially of information, measurements, or predictions) correct in all details; exact',
        senten:' accurate information about the illness is essential',
    },
    {
        word:'PERMANENT',
        wordlao:'ຖາວອນ',
        description:'lasting or intended to last or remain unchanged indefinitely',
        senten:' some temporary workers did not want a permanent job',
    },
    {
        word:'TEMPORARY',
        wordlao:'ຊົ່ວຄາວ',
        description:'lasting for only a limited period of time; not permanent',
        senten:' a temporary job',
    },
    {
        word:'IGNORE',
        wordlao:'ບໍ່ສົນໃຈ',
        description:'refuse to take notice of or acknowledge; disregard intentionally',
        senten:"Ignore it if you can't take it",
    },
    {
        word:'REFUSE',
        wordlao:'ປະຕິເສດ',
        description:'indicate or show that one is not willing to do something',
        senten:' I refused to answer',
    },
    {
        word:'HELP',
        wordlao:'ຊ່ວຍເຫຼືອ',
        description:"make it easier or possible for (someone) to do something by offering one's services or resources",
        senten:' she helped him find a buyer',
    },
    {
        word:'DESIRE',
        wordlao:'ຄວາມຕ້ອງການ',
        description:'to desire is to want something',
        senten:' my sister desires a big house and lots of money',
    },
    {
        word:'HOUSEHOLD',
        wordlao:'ຄົວເຮືອນ',
        description:'people who live in one house',
        senten:'ours houshole is made up of my father, my mother and me',
    },
    {
        word:'INTENT',
        wordlao:'ຕັ້ງໃຈ',
        description:'a plan to do something',
        senten:'her intent is to visit Italy next summer',
    },
    {
        word:'LANDSCAPE',
        wordlao:'ພູມສັນຖານ',
        description:'an area of land looks',
        senten:'the lanscape of the country is very green',
    },
    {
        word:'ABSENT',
        wordlao:'ການຂາດ',
        description:'not present in a place, at an occasion, or as part of something',
        senten:'most pupils were absent from school at least once',
    },
    {
        word:'LIFT',
        wordlao:'ຍົກ',
        description:'to move it higher',
        senten:' the man treed to lift the box',
    },
    {
        word:'TRY',
        wordlao:'ລອງ, ພະຍາຍາມ',
        description:'make an attempt or effort to do something',
        senten:'  started to try and untangle the mystery',
    },
    {
        word:'DECIDE',
        wordlao:'ຕັດສິນໃຈ',
        description:'make a choice from a number of alternatives',
        senten:' she had decided on her plan of action',
    },
    {
        word:'LOAD',
        wordlao:'ເພີ່ມເຂົ້າ',
        description:'to put object into something',
        senten:' the man loaded the boxes into a truck',
    },
    {
        word:'POLITE',
        wordlao:'ສຸພາບ',
        description:'when someone is polite, they are acting in thoughtful way',
        senten:' the boy was very polite, he behaved very thoughtfully',
    },
    {
        word:'BEHAVE',
        wordlao:'ການກະທຳ',
        description:'act or conduct oneself in a specified way, especially towards others',
        senten:'he always behaved like a gentleman',
    },
    {
    word:'CRASH',
    wordlao:'ຂັດຂ້ອງ, ປະທະ',
    description:' (of a vehicle) collide violently with an obstacle or another vehicle',
    senten:'"a racing car had crashed, wrecking a safety barrier',
    },
    {
        word:'OBSTCLE',
        wordlao:'ອຸປະສັກ',
        description:"a thing that blocks one's way or prevents or hinders progress",
        senten:'the major obstacle to achieving that goal is money',
     },
     {
        word:'POSSESS',
        wordlao:'ຄອບຄອງ',
        description:'to have it or own it',
        senten:'my uncle possesses three sheeps, a chicken, a cow and a dog',
    },
    {
        word:'OBSERVE',
        wordlao:'ສັງເກດການ',
        description:'notice or perceive (something) and register it as being significant',
        senten:'she observed that all the chairs were already occupied',
    },
    {
        word:'SEEK',
        wordlao:'ຂໍ, ຫາ',
        description:'to look for something',
        senten:"if i have a problem, i seek my sister's advice",
    },
    {
        word:'ADVICE',
        wordlao:'ຄຳແນະນຳ',
        description:'guidance or recommendations offered with regard to prudent future action',
        senten:'my advice is to see your doctor',

    },
    {
        word:'BRING',
        wordlao:'ນຳມາ,ພາໄປ',
        description:'to take someone or somthing to person or place',
        senten:"wake up—I've brought you some coffee",

    },
    {
        word:'COMMAND',
        wordlao:'ສັ່ງການ',
        description:'to tell someone to do something',
        senten:'the general commanded his his army to attack',

    },
    {
        word:'consultant',
        wordlao:'ທີ່ປຶກສາ',
        description:'a person who provides expert advice professionally',
        senten:'she is currently a self-employed business consultant',

    },
    {
        word:'SUREREAL',
        wordlao:'ເກີນຈິງ, ບໍ່ເໝືອນຈິງ',
        description:'strange; not seeming real; like a dream',
        senten:'Driving through the total darkness was a slightly surreal experience.',

    },
    {
        word:'EXPLOSION',
        wordlao:'ການລະເບີດ',
        description:'ັa violent burst, usually with a loud sound',
        senten:'a nuclear explosion can cause great damage',

    },
    {
        word:'BURDEN',
        wordlao:'ພາລະ',
        description:'a heavy load that you carry',
        senten:'Buying a house often places a large financial burden on young couples',

    },
    {
        word:'STUBBORN',
        wordlao:'ດື້, ປາກແຂງ',
        description:"having or showing dogged determination not to change one's attitude or position on something",
        senten:'two stubborn young people intent on doing their own thing',

    },
    {
        word:'ENVIRONMENT',
        wordlao:'ສິ່ງແວດລ້ອມ',
        description:'the surroundings or conditions in which a person, animal, or plant lives or operates',
        senten:'survival in an often hostile environment',

    },
    {
        word:'CONVINCE',
        wordlao:'ໂນ້ມນ້າວ,ເຮັດໃຫ້ເຊື່ອ',
        description:'cause (someone) to believe firmly in the truth of something',
        senten:' we had to convince politicians that they needed to do something"',

    },
    {
        word:'PARTICIPATE',
        wordlao:'ມີສ່ວນຮ່ວມ, ເຂົ້າຮ່ວມ',
        description:'take part in an action or endeavour',
        senten:'the art fair was held in 1967, with twenty galleries participating"',

    },
    {
        word:'COMPLICATE',
        wordlao:'ສັບຊ້ອນ, ສັບສົນ',
        description:'consisting of many interconnecting parts or elements; intricate',
        senten:'a complicated stereo system',

    },
    {
        word:'SYSTEM',
        wordlao:'ລະບົບ',
        description:'a set of things working together as parts of a mechanism or an interconnecting network; a complex whole',
        senten:'the state railway system"',

    },
    {
        word:'METEOR',
        wordlao:'ດາວຕົກ',
        description:'a rock from ouyer space that falls to earth',
        senten:'we saw a meteor in the sky lasst night',

    },
    {
        word:'REMOTE',
        wordlao:'ໄລຍະໄກ, ຫ່າງໄກ ',
        description:'it is very far away and difficult to get to',
        senten:'it took many days to get to the remote island',

    },
    {
        word:'ISLAND',
        wordlao:'ເກາະ',
        description:'a piece of land surrounded by water',
        senten:'he is an island of inspiration in a sea of sadness',

    },
    {
        word:'STATUE',
        wordlao:'ຮູບປັ້ນ',
        description:'an image of person or animal made of stone or metal',
        senten:'i saw a beautiful statue of lion today',

    },
    {
        word:'SUBMIT',
        wordlao:'ສົ່ງ,  ຍອມ',
        description:'to agree to do what thry tell you to do',
        senten:"she submitted to her mother's whishes and did her homework",

    },
    {
        word:'ASSIGNMENT',
        wordlao:'ສິ່ງທີ່ມອບໝາຍ',
        description:'a task or piece of work allocated to someone as part of a job or course of study',
        senten:'a homework assignment',

    },
    {
        word:'EXPRESSION',
        wordlao:'ການສະແດງອອກ',
        description:" the action of making known one's thoughts or feelings",
        senten:"By the expression on his face, he wasn't exactly enjoying the conversation",

    },
    {
        word:'CONFLICT',
        wordlao:'ຂັດແຍ່ງ',
        description:'a serious disagreement or argument, typically a protracted one',
        senten:"parents' and children's interests sometimes conflict",

    },
    {
        word:'INTEREST',
        wordlao:'ຄວາມສົນໃຈ',
        description:'the feeling of wanting to know or learn about something or someone',
        senten:'he developed an interest in art',

    },
    {
        word:'INCREASE',
        wordlao:'ເພີ່ມຂຶ້ນ',
        description:'become or make greater in size, amount, or degree',
        senten:'we are aiming to increase awareness of social issues',

    },
    {
        word:'COMBINE',
        wordlao:'ລວມເຂົ້າກັນ',
        description:'join or merge to form a single unit or substance',
        senten:'combine the flour with the margarine and salt',

    },
    {
        word:'EQUAL',
        wordlao:'ເທົ່າກັນ, ສົມດຸນ',
        description:'being the same in quantity, size, degree, or value',
        senten:'add equal amounts of water and flour',

    },
    {
        word:'EQUALITY',
        wordlao:'ຄວາມເທົ່າທຽມກັນ',
        description:'the state of being equal, especially in status, rights, or opportunities',
        senten:'an organization aiming to promote racial equality',

    },
    {
        word:'QUALITY',
        wordlao:' ຄຸນນະພາບ',
        description:'he standard of something as measured against other things of a similar kind; the degree of excellence of something',
        senten:'hese colleges provide a better quality of education',

    },
    {
        word:'QUANTITY',
        wordlao:'ປະລິມານ',
        description:'the amount or number of a material or abstract thing not usually estimated by spatial measurement',
        senten:'the quantity and quality of the fruit can be controlled',

    },
    {
        word:'REFLECT',
        wordlao:'ສະທ້ອນ',
        description:'(of a surface or body) throw back (heat, light, or sound) without absorbing it',
        senten:"when the sun's rays hit the Earth a lot of the heat is reflected back into space",

    },
    {
        word:'PROCESS',
        wordlao:'ຂະບວນການ, ຂັ້ນຕອນ',
        description:' a series of actions or steps taken in order to achieve a particular end',
        senten:"It's all part of the learning process",

    },
    {
        word:'INGREDIENTS',
        wordlao:'ສ່ວນປະກອບ',
        description:'any of the foods or substances that are combined to make a particular dish',
        senten:'pork is an important ingredient in many stir-fried dishes',

    },
    {
        word:'ABANDON',
        wordlao:' ຈາກໄປ, ລະຖິ້ມ',
        description:'cease to support or look after (someone); desert',
        senten:'her natural mother had abandoned her at an early age',

    },
    {
        word:'BURP',
        wordlao:'ເອື້ອມ',
        description:'noisily release air from the stomach through the mouth; belch',
        senten:'If she responds positively to her feeding, she will let out a little burp, yawn and fall asleep',

    },
    {
        word:'ANNOUNCE',
        wordlao:'ປະກາດ',
        description:'make a formal public statement about a fact, occurrence, or intention',
        senten:'he announced his retirement from international football',

    },
    {
        word:'RETIRE',
        wordlao:'ກະສຽນ',
        description:"leave one's job and cease to work, typically on reaching the normal age for leaving service",
        senten:'he retired from the Navy in 1986',

    },
    {
        word:'WITHDRAW',
        wordlao:'ການຖອນຕົວ, ນຳອອກ',
        description:'remove or take away (something) from a particular place or position',
        senten:'she prised open the lid and withdrew a slim diamond ring',

    },
    {
        word:'REMOVE',
        wordlao:'ລົບ, ເອົາອອກ',
        description:'atake (something) away or off from the position occupied',
        senten:'she sat down to remove her make-up',

    },
    {
        word:'OPPORTUNITY',
        wordlao:'ໂອກາດ',
        description:'a time or set of circumstances that makes it possible to do something:',
        senten:'the night drive gave us the opportunity of spotting rhinos',

    },
    {
        word:'CUSTOMER',
        wordlao:'ລູກຄ້າ',
        description:'a person who buys goods or services from a shop or business',
        senten:'Mr Harrison was a regular customer at the Golden Lion"',

    },
    {
        word:'EMPLOYEE',
        wordlao:'ລູກຈ້າງ',
        description:'a person employed for wages or salary, especially at non-executive level',
        senten:'Every employee of this company will be subject to annual cognitive tests',

    },
    {
        word:'CONCENTRATE',
        wordlao:'ມີສະມາທິ',
        description:"focus all one's attention on a particular object or activity",
        senten:"she couldn't concentrate on the film",

    },
    {
        word:'FEE',
        wordlao:'ຄ່າທຳນຽມ',
        description:'a payment made to a professional person or to a professional or public body in exchange for advice or services',
        senten:'they were faced with legal fees of £3000',

    },
    {
        word:'BUILD',
        wordlao:'ສ້າງ, ກໍ່ສ້າງ',
        description:'construct (something) by putting parts or material together',
        senten:'the ironworks were built in 1736',

    },
    {
        word:'INVEST',
        wordlao:'ລົງທຶນ',
        description:'put (money) into financial schemes, shares, property, ',
        senten:'getting workers to invest in private pension funds',

    },
    {
        word:'FLAVOR',
        wordlao:'ລົດຊາດ',
        description:'the distinctive taste of a food or drink',
        senten:'adding sun-dried tomatoes gives the sauce extra flavour',

    },
    {
        word:'TEMPLE',
        wordlao:'ວັດວາອາຣາມ',
        description:'a building that is uesde for religious purposes',
        senten:'the people visited the temple to pray',

    },
    {
        word:'MEASURE',
        wordlao:'ວັດ, ວັັດແທກ',
        description:'ascertain the size, amount',
        senten:'the amount of water collected is measured in pints',

    },
    {
        word:'KNOWLEDGE',
        wordlao:'ຄວາມຮູ້',
        description:'facts, information, and skills acquired through experience or education; ',
        senten:'Good work in language presupposes and depends on a real knowledge of things',

    },
    {
        word:'WING',
        wordlao:'ປີກ',
        description:'the part an animal that lets it fly',
        senten:'the bird used its wings to fly across the water',

    },
    {
        word:'ACROSS',
        wordlao:'ຂ້າມ',
        description:'from one side to the other of (a place, area, etc.)',
        senten:'I ran across the street',

    },
    {
        word:'FLY',
        wordlao:'ບິນ',
        description:'(of a bird, bat, or insect) move through the air using wings',
        senten:'the birds fly away',

    },
    {
        word:'DISTURB',
        wordlao:'ລົບກວນ',
        description:'interrupt the sleep, relaxation, or privacy of',
        senten:"I'll see my patient now and we are not to be disturbed",

    },
    {
        word:'INTERRUPT',
        wordlao:'ຂັດຈາກການເຮັດຫຍັງສັກຢ່າງ',
        description:'stop the continuous progress of (an activity or process)',
        senten:'he buzzer interrupted his thoughts',

    },
    {
        word:'ARROW',
        wordlao:'ລູກທະນູ',
        description:'straight stick shot from a bow',
        senten:'the arrow flew through the air and hit the target',

    },
    {
        word:'BOW',
        wordlao:'ທະນູ',
        description:'a weapon made of curved wood and string that shoots arrows',
        senten:'he went hunting with a bow and arrow',

    },
    {
        word:'WEAPON',
        wordlao:'ອາວຸດ',
        description:'a thing designed or used for inflicting bodily harm or physical damage',
        senten:'The second put his weapon away and darted off down another hallway',

    },
    {
        word:'WILLING',
        wordlao:'ເຕັມໃຈ',
        description:'ready, eager, or prepared to do something',
        senten:'"he was quite willing to compromise',

    },
    {
        word:'COMPROMISE',
        wordlao:'ປະນີປະນອມ',
        description:'an agreement or settlement of a dispute that is reached by each side making concessions',
        senten:'the secret of a happy marriage is compromise',

    },
    {
        word:'PREPARRE',
        wordlao:'ຕຽມການ',
        description:'make (something) ready for use or consideration',
        senten:'she was busy preparing lunch',

    },
    {
        word:'WOOD',
        wordlao:'ໄມ້',
        description:'the hard fibrous material that forms the main substance of the trunk or branches of a tree or shrub,',
        senten:'best quality woods were used for joinery',

    },
    {
        word:'BRAVE',
        wordlao:'ກ້າຫານ',
        description:'not afraid to face pain or danger',
        senten:'the brave friefighter saved the girl from the burning building',

    },
    {
        word:'BUILDING',
        wordlao:'ຕຶກ',
        description:'a structure with a roof and walls, such as a house or factory',
        senten:'The three-story building looked big enough to cover a city block',

    },
    {
        word:'ESCAPE',
        wordlao:'ຫຼົບໜີ',
        description:'break free from confinement or control',
        senten:'two burglars have just escaped from prison',

    },
    {
        word:'FREEDOM',
        wordlao:'ອິດສະຫຼະ',
        description:'the power or right to act, speak, or think as one wants',
        senten:'we do have some freedom of choice',

    },
    {
        word:'DISADVANTAGE',
        wordlao:'ຂໍ້ເສຍປຽບ',
        description:'an unfavourable circumstance or condition that reduces the chances of success or effectiveness',
        senten:'a major disadvantage is the limited nature of the data"',

    },
    {
        word:'ENEMY',
        wordlao:'ສັດຕູ',
        description:'a person who is actively opposed or hostile to someone or something',
        senten:'this man was her sworn enemy"',

    },
    {
        word:'OPPOSITE',
        wordlao:'ກົງກັນຂ້າມ',
        description:'situated on the other or further side when seen from a specified or implicit viewpoint; facing',
        senten:'a crowd gathered on the opposite side of the street',

    },
    {
        word:'ROUNDABOUT',
        wordlao:'ວົງວຽນ',
        description:'a place where three or more roads join and traffic must go around a circular area in the middle',
        senten:'Take the first left at the roundabout',

    },
    {
        word:'REFUND',
        wordlao:'ເອົາເງິນຄືນຈາກການຊື້ຂອງ',
        description:'return of money',
        senten:"if you're not delighted with your purchase, we guarantee to refund your money in full",

    },
    {
        word:'OBEY',
        wordlao:'ເຊື່ອຟັງ',
        description:'to follow what a lae or person says you must do',
        senten:'my little sister did not obey my mother. now she is in trouble',

    },
    {
        word:'TRUST',
        wordlao:'ເຊື່ອໃຈ',
        description:'to believe that someone is honest and will do what is right',
        senten:'i trust my friends, they do not tell my secrets to other people',

    },
    {
        word:'EXCEPT',
        wordlao:'ນອກຈາກ',
        description:'not including; other than',
        senten:'they work every day except Sunday',

    },
    {
        word:'CONFIDENT',
        wordlao:'ໝັ້ນໃຈ',
        description:'they work every day except Sunday',
        senten:"I am not very confident about tonight's game",

    },
    {
        word:'PROFIT',
        wordlao:'ກຳົໄລ',
        description:'a financial gain, especially the difference between the amount earned and the amount spent in buying',
        senten:'It had finally been in the black and she was actually making a profit',

    },
    {
        word:'OUTCOME',
        wordlao:'ຜົນໄດ້ຮັບ',
        description:'the way a thing turns out; a consequence',
        senten:'it is the outcome of the vote that counts',

    },
    {
        word:'BENEFIT',
        wordlao:'ຜົນປະໂຫຍດ',
        description:'an advantage or profit gained from something:',
        senten:'enjoy the benefits of being a member',

    },
    {
        word:'CONSIDER',
        wordlao:'ພິຈາລະນາ, ຄຳນຶງເຖິງ',
        description:'think carefully about (something), typically before making a decision',
        senten:'If computers are so popular, perhaps we should consider buying one for the use of our guests',

    },
    {
        word:'DUST',
        wordlao:'ຝຸ່ນ',
        description:'fine, dry powder consisting of tiny particles of earth or waste matter lying on the ground or on surfaces or carried in the air:',
        senten:'The car sent up clouds of dust',

    },
    {
        word:'DISASTER',
        wordlao:'ຫາຍະນາ',
        description:'a really bad thing that happens',
        senten:'when the car crashed, it was a disaster',

    },
    {
        word:'CONSUME',
        wordlao:'ບໍລິໂພກ',
        description:'eat, drink, or ingest (food or drink)',
        senten:'people consume a good deal of sugar in drinks',

    },
    {
        word:'POLLUTION',
        wordlao:'ມົນລະພິດ',
        description:'the presence in or introduction into the environment of a substance which has harmful or poisonous effects',
        senten:'"the level of pollution in the air is rising',

    },
    {
        word:'RISK',
        wordlao:'ຄວາມສຽ່ງ',
        description:'a situation involving exposure to danger',
        senten:'he risked his life to save his dog',

    },
    {
        word:'CONGESTED',
        wordlao:'ແອອັດ',
        description:'(of a road or place) so crowded with traffic or people as to hinder or prevent freedom of movement',
        senten:'he streets are often heavily congested with traffic',

    },{
        word:'RESCUE',
        wordlao:'ຊ່ວຍເຫຼືອ',
        description:'save (someone) from a dangerous or difficult situation',
        senten:'firemen rescued a man trapped in the river',

    },
    {
        word:'TRAP',
        wordlao:'ກັບດັກ',
        description:'a device or enclosure designed to catch and retain animals, ',
        senten:'the squirrels ravaged the saplings, despite the baited traps',

    },
    {
        word:'DISAPPEAR',
        wordlao:'ຫາຍໄປ, ສູນຫາຍ',
        description:'cease to be visible',
        senten:'the sun had disappeared',

    },
    {
        word:'DISAPPOINT',
        wordlao:'ຜິດຫັວງ',
        description:'fail to fulfil the hopes or expectations of:',
        senten:'"I have no wish to disappoint everyone by postponing the visit',

    },
    {
        word:'POSTPONE',
        wordlao:'ເລື່ອນນັດ, ເລື່ອນເວລາ',
        description:'cause or arrange for (something) to take place at a time later than that first scheduled',
        senten:'the visit had to be postponed for some time',

    },
    {
        word:'VOMIT',
        wordlao:'ອາຈຽນ',
        description:'eject matter from the stomach through the mouth',
        senten:'the sickly stench made him want to vomit',

    },
    {
        word:'ADULT',
        wordlao:'ຜູ້ໃຫ່ຍ, ຜ່ານການເປັນໄວລຸ້ນມາ',
        description:'having finish growing',
        senten:'children should be accompanied by an adult',

    },
    {
        word:'TEENAGER',
        wordlao:'ໄວຮຸ້ນ',
        description:'a person aged between 13 and 19 years',
        senten:'As a teenager, your body needs nutrients because you are still growing',

    },
    {
        word:'AFFORD',
        wordlao:'ຈ່າຍໄດ້, ສາມາດຊື້ໄດ້',
        description:'have enough money to pay for',
        senten:'the best that I could afford was a first-floor room',

    },
    {
        word:'AGAINST',
        wordlao:'ຕໍ່ຕ້ານ,ຕິດຂັດ',
        description:'to have a reason not to like someone or something',
        senten:'if you have nothing against taking public trasport, i suggest taking a bus',

    },
    {
        word:'AGENDA',
        wordlao:'ກຳນົດການ, ວາລະ',
        description:'a list of subjects that people will discuss at a meeting',
        senten:"your memo was one of the points on the agenda for last week's meeting",

    },
    {
        word:'BEHAVE',
        wordlao:'ການກະທຳ',
        description:'act or conduct oneself in a specified way, especially towards others',
        senten:'he always behaved like a gentleman',

    },
    {
        word:'PURPOSE',
        wordlao:'ຈຸດປະສົງ',
        description:'the reason for which something is done or created or for which something exists',
        senten:'the building is no longer needed for its original purpose"',

    },
    {
        word:'APPOINT',
        wordlao:'ແຕ່ງຕັ້ງ',
        description:'assign a job or role to (someone)',
        senten:'they appointed her as personnel manager',

    },
    {
        word:'ALLOW',
        wordlao:'ອະນຸຍາດ',
        description:'let (someone) have or do something',
        senten:'the dissident was allowed to leave the country',

    },
    {
        word:'PUBLIC',
        wordlao:'ສາທະລະນະ',
        description:'of or concerning the people as a whole',
        senten:' public concern \ public shcool',

    },
    {
        word:'ALONGSIDE',
        wordlao:'ທາງຂ້າງ, ຄຽງຂ້າງ',
        description:'next to someone or something',
        senten:'a car pulled up alongside ours',

    },
    {
        word:'ALTERATION',
        wordlao:'ການປຽ່ນແປງ',
        description:'a change, or the process of changing something',
        senten:'we made a few alteration to the kitchen',

    },
    {
        word:'ALTERNATIVE',
        wordlao:'ທາງເລືອກ, ຕົວເລືອກ',
        description:'(of one or more things) available as another possibility or choice',
        senten:'he various alternative methods for resolving disputes',

    },
    {
        word:'EXPLAIN',
        wordlao:'ອະທິບາຍ',
        description:'make (an idea or situation) clear to someone by describing it in more detail or revealing relevant facts',
        senten:'he explained the situation',

    },
    {
        word:'SITUATION',
        wordlao:'ສະຖານະການ',
        description:'a set of circumstances in which one finds oneself; a state of affairs',
        senten:'the situation between her and Jake had come to a head',

    },
    {
        word:'RESPONSIBILITY',
        wordlao:'ຄວາມຮັບຜິດຊອບ',
        description:"the state or fact of having a duty to deal with something or of having control over someone",
        senten:'a true leader takes responsibility for their team and helps them achieve goals',

    },
    {
        word:'RESPECT',
        wordlao:'ການເຄົາລົບ',
        description:'a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements',
        senten:'"the director had a lot of respect for Douglas as an actor',

    },
    {
        word:'PUBLISHED',
        wordlao:'ເຜີຍແຜ່,ອອກຕີພິມ',
        description:'(of a book, journal, piece of music, etc.) prepared and issued for public sale or readership',
        senten:'there is very little published data on the subject',

    },
    {
        word:'ABSORB',
        wordlao:'ດູດຊຶມ, ດູດຊັບ',
        description:'take in or soak up (energy or a liquid or other substance) by chemical or physical action',
        senten:'buildings can be designed to absorb and retain heat',

    },
    {
        word:'DISCUSS',
        wordlao:'ເຈລະຈາ, ຫາລື',
        description:'talk about (something) with a person or people',
        senten:'they were discussing where to go for a drink',

    },
    {
        word:'ARREST',
        wordlao:'ຈັບກຸມ, ວິນິດໄສ',
        description:'seize (someone) by legal authority and take them into custody',
        senten:'two youths aged 16 were arrested"',

    },
    {
        word:'ASSOCIIATE',
        wordlao:'ສົມທົບ, ມີສ່ວນຮ່ວມ',
        description:"connect (someone or something) with something else in one's mind",
        senten:'I associated wealth with freedom',

    },
    {
        word:'INSITUTE',
        wordlao:'ສະຖາບັນ',
        description:'an organization having a particular purpose',
        senten:'a research institute',

    },
    {
        word:'ACCESS',
        wordlao:'ການເຂົ້າເຖິງ',
        description:'the means or opportunity to approach or enter a place',
        senten:" You’ll need a password to access the database",

    },
    {
        word:'ACCOUNT',
        wordlao:'ບັນຊີ',
        description:'a report or description of an event or experience',
        senten:'a detailed account of what has been achieved',

    },
    {
        word:'ECONOMy',
        wordlao:'ເສດຖະກິເ',
        description:'the state of a country or region in terms of the production and consumption of goods and services and the supply of money',
        senten:'he favours tax cuts to stimulate the economy',

    },
    {
        word:'COMMUNITY',
        wordlao:'ຊຸມຊົນ',
        description:'a group of people living in the same place or having a particular characteristic in common',
        senten:'the scientific community',

    },
    {
        word:'COMMUNICATION',
        wordlao:'ການສື່ສານ',
        description:'the imparting or exchanging of information by speaking, writing, or using some other medium',
        senten:'"television is an effective means of communication"',

    },
    {
        word:'COMPANY',
        wordlao:'ບໍລິສັດ',
        description:'a commercial business',
        senten:'a shipping company',

    },
    {
        word:'PAGEANT',
        wordlao:'ການປະກວດ',
        description:'something regarded as a series of interesting and varied events',
        senten:'By the time she was 17, Linda won the Miss New York State beauty pageant',

    },
    {
        word:'PREGNANT',
        wordlao:'ການຕັ້ງທ້ອງ, ຖືພາ',
        description:'(of a woman or female animal) having a child or young developing in the uterus',
        senten:'she was six months pregnant',

    },
    {
        word:'KIPNAP',
        wordlao:'ລັກພາຕົວ',
        description:'abduct (someone) and hold them captive, typically to obtain a ransom',
        senten:'militants kidnapped the daughter of a minister',

    },
    {
        word:'RANSOM',
        wordlao:'ຄ່າໄຖ່',
        description:'a sum of money demanded or paid for the release of a captive',
        senten:'the kidnappers demanded a ransom',

    },
    {
        word:'DEMAND',
        wordlao:'ຮຽກຮ້ອງຕ້ອງການ, ອຸປະສົງ',
        description:'an insistent and peremptory request, made as of right',
        senten:'Books were in demand and were multiplied',

    },
    {
        word:'VOW',
        wordlao:'ຄຳໝັ້ນສັນຍາ',
        description:'solemnly promise to do a specified thing',
        senten:'I vowed that my family would never go hungry',

    },
    {
        word:'VIA',
        wordlao:'ຜ່ານ, ຜ່ານຊ່ອງທາງ',
        description:'travelling through (a place) en route to a destination',
        senten:'most people buy a home with a mortgage via a building society',

    },
    {
        word:'INNOVATE',
        wordlao:'ປະດິດສ້າງ',
        description:'introduce (something new, especially a product)',
        senten:'we continue to innovate new products',

    },
    {
        word:'EVOLUTION',
        wordlao:'ວິວັດທະນາການ',
        description:'the gradual development of something',
        senten:'we have developed a new theory of Evolution',

    },
    {
        word:'REVOLUTION',
        wordlao:'ການປະຕິວັດ ',
        description:'a forcible overthrow of a government or social order, in favour of a new system',
        senten:'the country has had a socialist revolution',

    },
    {
        word:'GRATITUDE',
        wordlao:'ຄວາມຮູ້ສຶກຂອບໃຈ,ຄວາມກະຕັນຍູ',
        description:'the quality of being thankful; readiness to show appreciation for and to return kindness',
        senten:'she expressed her gratitude to the committee for their support',

    },
    {
        word:'ATTITUDE',
        wordlao:'ທັດສະນະຄະຕິ,ທ່າທາງ ',
        description:'a settled way of thinking or feeling about somethin',
        senten:'the boy was standing in an attitude of despair',

    },
    {
        word:'SUSTAINABLE',
        wordlao:'ຄວາມຍືນຍົງ',
        description:'able to be maintained at a certain rate or level',
        senten:'sustainable economic growth"',

    },
    {
        word:'CONSISTEN',
        wordlao:'ສະໝ່ຳສະເໝີ, ',
        description:'acting or done in the same way over time, especially so as to be fair or accurate',
        senten:'the parents are being consistent and firm in their reactions',

    },
    {
        word:'STABLE',
        wordlao:'ໝັ້ນຄົງ',
        description:'(of an object or structure) not likely to give way or overturn; firmly fixed',
        senten:'a stable relationship',

    },
    {
        word:'EDIBLE',
        wordlao:'ສາມາດກິນໄດ້',
        description:'n insistent and peremptory request, made as of right',
        senten:'Do you know how many edible plants grow naturally in our own front yards ?',

    },
    {
        word:'REVIEW',
        wordlao:'ທົບທວນ, ຍ້ຳຄືນ',
        description:'a formal assessment of something with the intention of instituting change if necessary',
        senten:"Shall we review what you've learned ?",

    },
    {
        word:'PROGRESS',
        wordlao:'ຄວາມຄືບໜ້າ, ຄວາມກ້າວໜ້າ',
        description:'forward or onward movement towards a destinationt',
        senten:'Just about time I think the two of you are making progress, something like this comes up',

    },
    {
        word:'SPECIFIC',
        wordlao:'ສະເພາະເຈາະຈົງ',
        description:'clearly defined or identified',
        senten:'"He may understand you need the specific time of the incident',

    },
    {
        word:'AFTER',
        wordlao:'ຫຼັງຈາກ',
        description:'in the time following (an event or another period of time)',
        senten:"there's only one thing to do after an experience like that",

    },
    {
        word:'INCIDENT',
        wordlao:'ເຫດການ',
        description:'an instance of something happening; an event or occurrence',
        senten:"He'd changed since their incident",

    },
    {
        word:'ARGUE',
        wordlao:'ໂຕ້ຖຽງ, ມີປາກສຽງກັນ',
        description:'exchange or express diverging or opposite views, typically in a heated or angry way',
        senten:'the two men started arguing in a local pub',

    },
    {
        word:'PASSENGER',
        wordlao:' ຜູ້ໂດຍສານ',
        description:'a traveller on a public or private conveyance other than the driver, pilot, or crew',
        senten:'He opened the passenger door with a hopeful smile',

    },
    {
        word:'VEHICLE',
        wordlao:'ຍານພາຫະນະ',
        description:'a thing used for transporting people or goods, especially on land, such as a car, lorry, or cart',
        senten:'the vehicle was sent skidding across the road',

    },
    {
        word:'DIVORCE',
        wordlao:'ການຢ່າຮ້າງ',
        description:'the legal dissolution of a marriage by a court or other competent body',
        senten:'her divorce from her first husband',

    },
    {
        word:'PERCEPTION',
        wordlao:'ການຮັບຮູ້',
        description:'the ability to see, hear, or become aware of something through the senses',
        senten:'the perception of pain',

    },
    {
        word:'PERSPECTIVE',
        wordlao:'ທັດສະນະຄະ, ມຸມມອງ',
        description:'the appearance of viewed ',
        senten:'It was the perspective of the learners',

    },
    {
        word:'INSPECTION',
        wordlao:'ການຕວດສອບ',
        description:'careful examination or scrutiny',
        senten:'please have your tickets ready for inspection',

    },
    {
        word:'SECURITY',
        wordlao:'ຄວາມປອດໄພ',
        description:'the state of being free from danger or threat',
        senten:'the system is designed to provide maximum security against toxic spills',

    },
    {
        word:'INSPIRE',
        wordlao:'ແຮງບັນດານໃຈ',
        description:'fill (someone) with the urge or ability to do or feel something, especially to do something creative',
        senten:'his passion for literature inspired him to begin writing"',

    },
    {
        word:'motivate',
        wordlao:'ຈຸງໃຈ, ກະຕຸ້ນ',
        description:'provide (someone) with a reason for doing something',
        senten:"I'm going to motivate kids to study civics",

    },
    {
        word:'CONTACT',
        wordlao:'ຕິດຕໍ່',
        description:'the state of physical touching',
        senten:'she had little contact with family members',

    },
    {
        word:'INSULTS',
        wordlao:'ດູຖູກ',
        description:'speak to or treat with disrespect or scornful abuse',
        senten:"you're insulting the woman I love",

    },
    {
        word:'INSTALL',
        wordlao:'ຕິດຕັ້ງ',
        description:'place or fix (equipment or machinery) in position ready for use',
        senten:"we're planning to install a new shower",

    },
    {
        word:'STRUCTURE',
        wordlao:'ໂຄງສ້າງ',
        description:'the arrangement of and relations between the parts or elements of something comple',
        senten:"he company's weakness is the inflexibility of its management structure",

    },
    {
        word:'OUTLINE',
        wordlao:'ໂຄງຮ່າງ',
        description:'a general description or plan showing the essential features of something but not the detail',
        senten:'She carefully drew the outline of a truck around the words on the top',

    },
    {
        word:'CATEEGORY',
        wordlao:'ໝວດໝູ່, ປະເພດ',
        description:'a class or division of people or things regarded as having particular shared characteristics',
        senten:'the various categories of research',

    },
    {
        word:'VARIOUS',
        wordlao:'ຫຼາກຫຼາຍມ ຫຼາຍຢ່າງ',
        description:'more than one; several',
        senten:'or various reasons they had never considered having children',

    },
    {
        word:'DREAM',
        wordlao:'ຄວາມຝັນ',
        description:"a series of thoughts, images, and sensations occurring in a person's mind during sleep",
        senten:'I had a recurrent dream about falling from great heights',

    },
    {
        word:'WITHOUT',
        wordlao:'ປະສາຈາກ, ໂດຍບໍໍ່ມີ',
        description:'in the absence of',
        senten:'He walked in without knocking',

    },
    {
        word:'WAIT',
        wordlao:'ລໍຖ້າ',
        description:'stay where one is or delay action until a particular time or event',
        senten:'I was told to wait outside until the office was open',

    },
    {
        word:'UNTIL',
        wordlao:'ຈົນກວ່າ',
        description:'up to (the point in time or the event mentioned',
        senten:"you don't know what you can achieve until you try",

    },
    {
        word:'TEMPERATURE',
        wordlao:'ອຸນຫະພູມ',
        description:'the degree or intensity of heat present in a substance or objec',
        senten:'at a temperature of 2°C',

    },
    {
        word:'FORNIDEN',
        wordlao:'ຂໍ້ຫ້າມ, ສິ່ງຫວງຫ້າມ',
        description:'not allowed; banned',
        senten:'a list of forbidden books',

    },
    {
        word:'ADDICTION',
        wordlao:'ເສດຕິດ',
        description:'the fact or condition of being addicted to a particular substance or activity',
        senten:'Drinking a cup of coffee each morning can lead to an insidious addiction',

    },
    {
        word:'SEPARATE',
        wordlao:'ແຍກ, ຈັດແບ່ງ',
        description:'forming or viewed as a unit apart or by itself',
        senten:'Each of us could find separate areas to be alone but remain close to each other',

    },
    {
        word:'ATTENTION',
        wordlao:'ຄວາມສົນໃຈ',
        description:'notice taken of someone or something; the regarding of someone or something as interesting or important',
        senten:'But he paid no attention to her warning',

    },
    {
        word:'EXPIRE',
        wordlao:'ໝົດອາຍຸ',
        description:'(of a document, authorization, or agreement) come to the end of the period of validity',
        senten:'My passport expires next month',

    },
    {
        word:'SCHOLARSHIP',
        wordlao:'ທຶນການສຶກສາ',
        description:'academic study or achievement; learning at a high level',
        senten:'He won a scholarship at the age of sixteen, and was teaching literature at eighteen',

    },
    {
        word:'EXCHANGE',
        wordlao:'ແລກປຽ່ນ',
        description:'an act of giving one thing and receiving another (especially of the same kind) in return',
        senten:'opportunities for the exchange of information',

    },
    {
        word:'FICTION',
        wordlao:'ນິຍາຍ, ບໍ່ເປັນເລື່ອງຈິງ',
        description:'something that is invented or untrue',
        senten:"Just because it's fiction doesn't mean you can't learn from it",

    },
    {
        word:'FRIENDSHIP',
        wordlao:'ມິດຕະພາບ',
        description:'the emotions or conduct of friends; the state of being friends',
        senten:'I value your friendship and wish you to have as good an opinion of me',

    },
    {
        word:'VALUE',
        wordlao:'ມູນຄ່າ, ຄຸນຄ່າ',
        description:'the regard that something is held to deserve; the importance, worth, or usefulness of something',
        senten:'your support is of great value',

    },
    {
        word:'BETRAY',
        wordlao:'ທໍລະຍົດ, ຫັກຫຼັງ',
        description:'be gravely disloyal to',
        senten:"the men who have betrayed British people's trust",

    },
    {
        word:'LOCAL',
        wordlao:'ທ້ອງຖິ່ນ, ພື້ນບ້ານ',
        description:"relating or restricted to a particular area or one's neighbourhood",
        senten:'the local post office',

    },
    {
        word:'COUNTRYSIDE',
        wordlao:'ຊົນນະບົດ',
        description:'the land and scenery of a rural area',
        senten:'Do you ever miss the countryside? she asked',

    },
    {
        word:'UPCOUNTRY',
        wordlao:'ຕ່າງແຂວງ',
        description:'in or towards the interior of a country',
        senten:'"she comes from somewhere upcountry',

    },
    {
        word:'SUBTRACT',
        wordlao:'ຕັດອອກ, ລົບອອກ',
        description:'take away (a number or amount) from another to calculate the difference',
        senten:'subtract 43 from 60"',

    },
    {
        word:'ADVERTISE',
        wordlao:'ໂຄສະນາ',
        description:'publicize information about (a vacancy)',
        senten:'for every job we advertise we get a hundred applicants"',

    },
    {
        word:'CADIDATE',
        wordlao:'ຜູ້ສະໝັກ',
        description:'a person who applies for a job or is nominated for election',
        senten:'Each candidate was known, not by his name, but by a number',

    },
    {
        word:'EACH',
        wordlao:'ແຕ່ລະ',
        description:'every one of two or more people or things, regarded and identified separately',
        senten:'they each have their own personality',

    },
    {
        word:'PERSONALITY',
        wordlao:'ບຸກຄະລິກ',
        description:"the combination of characteristics or qualities that form an individual's distinctive character",
        senten:'she had a sunny personality that was very engaging',

    },
    {
        word:'COMMISSION',
        wordlao:'ຄ່ານາຍໜ້າ',
        description:'an instruction, command, or role given to a person or group',
        senten:'he received a commission to act as an informer"',

    },
    {
        word:'ADOPT',
        wordlao:'ຮັບລຽ້ງ, ອຸປະຖຳ',
        description:"legally take (another's child) and bring it up as one's own",
        senten:'there are many people eager to adopt a baby',

    },
    {
        word:'CONCESSION',
        wordlao:'ສຳປະທານ',
        description:'a thing that is granted, especially in response to demands',
        senten:'An extension of the British concession backwards was granted in 1898',

    },
    {
        word:'APPLY',
        wordlao:'ສະໝັກມ,ນຳມາປັບໃຊ້',
        description:'be applicable or relevant',
        senten:'We may apply this to the theory of impact',

    },
    {
        word:'APPLICATION',
        wordlao:'ໃບສະໝັກ, ຄຳຮ້ອງຂໍ',
        description:'a formal request to be considered for a position or to be allowed to do or have something',
        senten:'licences are available on application',

    },
    {
        word:'LICENSE',
        wordlao:'ໃບອະນູຍາດ, ໃບຂັບຂີ່',
        description:' grant a licence to:',
        senten:'a pub has to be licensed by the local justices"',

    },
    {
        word:'GRANT',
        wordlao:'ຍິນຍອມ, ອະນຸຍາດ',
        description:'agree to give or allow (something requested) to',
        senten:'they were granted a meeting',

    },
    {
        word:'SELF-AWARENESS',
        wordlao:'ການຮູ້ຈັກຕົນເອງ',
        description:"conscious knowledge of one's own character and feelings",
        senten:'the process can be painful but it leads to greater self-awareness',

    },
    {
        word:'DEDICATE',
        wordlao:'ອຸທິດຕົນ',
        description:'devote (time or effort) to a particular task or purpose',
        senten:'Joan has dedicated her life to animals',

    },
    {
        word:'EXCUSE',
        wordlao:'ຂໍ້ອ້າງ, ຂໍ້ແກ້ຕົວ',
        description:'seek to lessen the blame attaching to (a fault or offence); try to justify',
        senten:'I have no excuse for my rudeness',

    },
    {
        word:'EMBARRASSED',
        wordlao:'ຄວາມຮູ້ສຶກອາຍ, ຂາຍໜ້າ',
        description:'feeling or showing embarrassment',
        senten:"There's nothing to be embarrassed about",

    },
    {
        word:'ENCOURAGE',
        wordlao:'ສົ່ງເສີມ, ຈູງໃຈ',
        description:'give support, confidence, or hope to (someone)',
        senten:'we were encouraged by the success of this venture',

    },
    {
        word:'ENCOUNTER',
        wordlao:'ຜະເຊີນໜ້າກັບ',
        description:'unexpectedly be faced with or experience (something hostile or difficult)',
        senten:'we have encountered one small problem',

    },
    {
        word:'EVIDENCE',
        wordlao:'ຫຼັກຖານ',
        description:'the available body of facts or information indicating whether a belief or proposition is true or valid',
        senten:'the study finds little evidence of overt discrimination',

    },
    {
        word:'EXPERIENCE',
        wordlao:'ປະສົບການ',
        description:'practical contact with and observation of facts or events',
        senten:'he had learned his lesson by painful experience',

    },
    {
        word:'EXPORT',
        wordlao:'ສົ່ງອອກ',
        description:'send (goods or services) to another country for sale',
        senten:'nearly all the bananas produced were exported to Britain"',

    },
    {
        word:'EXPERT',
        wordlao:' ຊຽ້ວຊານ',
        description:'a person who is very knowledgeable about or skilful in a particular area:',
        senten:'He loved riding and walking, was an expert swimmer and enjoyed a game at tennisk',

    },
    {
        word:'PROVE',
        wordlao:'ພິສູດ',
        description:'demonstrate the truth or existence of (something) by evidence or argument',
        senten:"I'm not asking you to prove anything",

    },
    {
        word:'POSSIBILITY',
        wordlao:'ຄວາມເປັນໄປໄດ້',
        description:'a thing that may happen or be the case',
        senten:'there was the possibility that he might be turned down',

    },
    {
        word:'IMPORT',
        wordlao:'ນຳເຂົ້າ',
        description:'nbring (goods or services) into a country from abroad for sale',
        senten:'supermarkets may no longer import cheap jeans from Bulgaria',

    },
    {
        word:'FACT',
        wordlao:'ຄວາມຈິງ',
        description:'a thing that is known or proved to be true',
        senten:'he ignores some historical and economic facts',

    },
    {
        word:'IMPORTANT',
        wordlao:'ຄວາມສຳຄັນ',
        description:'of great significance or value',
        senten:'More important, what had they been doing?',

    },
    {
        word:'FLEXIBLE',
        wordlao:'ຍືດຫຍຸ່ນ, ປັບຕົົວໄດ້ງ່າຍ',
        description:'capable of bending easily without breaking:',
        senten:'flexible rubber seals',

    }, {
        word:'FLOOD',
        wordlao:'ນຳ້ຖ່ວມ, ລົ້ນ',
        description:'an overflow of a large amount of water beyond its normal limits, especially over what is normally dry land',
        senten:'Another flood occurred in 1645',

    },
    {
        word:'FOUNDATION',
        wordlao:'ພື້ນຖານ, ຮາກຖານ',
        description:'the lowest load-bearing part of a building, typically below ground level',
        senten:'build the arch resting on top of this solid foundation',

    },
    {
        word:'BUDGET',
        wordlao:'ງົບປະມານ',
        description:'an estimate of income and expenditure for a set period of time',
        senten:'The budget for 1906 balanced at £120,400d ',

    },
    {
        word:'GUEST',
        wordlao:'ແຂກ',
        description:"a person who is invited to visit someone's home or attend a particular social occasion",
        senten:'I have two guests coming to dinner tonight',

    },
    {
        word:'EFFECT',
        wordlao:'ຜົນກະທົບ',
        description:'a change which is a result or consequence of an action or other cause',
        senten:'Did his speech have any effect on you?',

    },
    {
        word:'AFFECT',
        wordlao:'ສົ່ງຜົນກະທົບ',
        description:'have an effect on; make a difference to',
        senten:'your attitude will affect how successful you are',

    },
    {
        word:'IMPOSE',
        wordlao:'ບັງຄັບ, ກຳນົດໂທດ',
        description:'force (an unwelcome decision or ruling) on someone',
        senten:'the decision was theirs and was not imposed on them by others',

    },
    {
        word:'PREDICE',
        wordlao:'ທຳນາຍ',
        description:'say or estimate that (a specified thing) will happen in the future or will be a consequence of something',
        senten:'it is too early to predict a result',

    },
    {
        word:'RESULT',
        wordlao:'ຜົນໄດ້ຮັບ',
        description:'a thing that is caused or produced by something else; a consequence or outcome',
        senten:'I did not know at first but it was the result of a wise policy.',

    },
    {
        word:'PRICE',
        wordlao:'ລາຄາ',
        description:'the amount of money expected, required, or given in payment for something',
        senten:'arge cars are dropping in price',

    },
    {
        word:'DESPITE',
        wordlao:'ໂດຍບໍ່ມີ..ມາກະທົບ',
        description:'without being affected by; in spite of',
        senten:'"he remains a great leader despite age and infirmity',

    },
    {
        word:'DESERVE',
        wordlao:'ສົມຄວນໄດ້ຮັບ',
        description:'n insistent and peremptory request, made as of right',
        senten:"we didn't deserve to win",
    },
        {
            word:'RUIN',
            wordlao:'ທຳລາຍ',
            description:'the physical destruction or disintegration of something or the state of disintegrating or being destroyed',
            senten:'Some one is trying to ruin me',
    
        },
        {
            word:'GENDER',
            wordlao:'ເພດ',
            description:'either of the two sexes (male and female),',
            senten:'someone of the opposite gender',
    
        },
        {
            word:'CONTEMPLATE',
            wordlao:'ຮຳ່ເພິງຄິດ, ໄຕ່ຣຕອງ',
            description:'look thoughtfully for a long time at',
            senten:'he contemplated his image in the mirrors',
    
        },

        {
            word:'DEPRESSIVE',
            wordlao:'ຊຶມເສົ້າ',
            description:'feelings of severe despondency and dejection',
            senten:'elf-doubt creeps in and that swiftly turns to depression',
    
        },

        {
            word:'DEPOSIT',
            wordlao:'ເງິນຝາກ',
            description:'a sum of money paid into a bank or building society account',
            senten:'Payment through a banker or by written draft against deposit was frequent',
    
        },

        {
            word:'DEPEND',
            wordlao:'ຂຶ້ນຢູ່ກັບ,ເຊື່ອໃຈ',
            description:'be able to trust; rely on',
            senten:'we can depend on her to deliver a quality product',
    
        },

        {
            word:'DEPARTMENT',
            wordlao:'ພະແນກ, ພາກວິຊາ',
            description:'a division of a large organization  dealing with a specific area of activity',
            senten:"the council's finance department",
    
        },

        {
            word:'FACTORY',
            wordlao:'ໂຮງງານ',
            description:'a building or group of buildings where goods are manufactured or assembled chiefly by machine',
            senten:'factory workers',
    
        },

        {
            word:'FACULTY',
            wordlao:'ຄະນະ',
            description:'a group of university departments concerned with a major division of knowledge',
            senten:'he law faculty',
    
        },

        {
            word:'INSOMNIA',
            wordlao:'ນອນບໍ່ຫຼັບ',
            description:'habitual sleeplessness; inability to sleep',
            senten:'Anxiety can cause insomnia, making jet lag worse',
    
        },

        {
            word:'ACCEPT',
            wordlao:'ໄດ້ຮັບ',
            description:'consent to receive or undertake (something offered)',
            senten:'he accepted a pen as a present"',
    
        },

        {
            word:'GENDER',
            wordlao:'ເພດ',
            description:'either of the two sexes (male and female),',
            senten:'someone of the opposite gender',
    
        },

        {
            word:'ADMIT',
            wordlao:'ຍອມຮັບ',
            description:'confess to be true or to be the case',
            senten:'the Home Office finally admitted that several prisoners had been injured"',
    
        },

        {
            word:'CONFESS',
            wordlao:'ສາລະພາບ',
            description:'admit that one has committed a crime or done something wrong',
            senten:'he confessed that he had attacked the old man',
    
        },

        {
            word:'ADMINISTER',
            wordlao:'ຈັດການ, ບໍລິຫາານ',
            description:'manage and be responsible for the running of (a business, organization, etc.)',
            senten:'each school was administered separately',
    
        },

        {
            word:'ADMIRE',
            wordlao:'ນັບຖື, ຊົມເຊີຍ',
            description:'regard with respect or warm approval',
            senten:'"I admire your courage',
    
        },

        {
            word:'COURAGE',
            wordlao:' ຄວາມກ້າຫານ',
            description:'the ability to do something that frightens one; bravery',
            senten:'she called on all her courage to face the ordeal',
    
        },

        {
            word:'ILLUTRATION',
            wordlao:'ພາບປະກອບ',
            description:'a picture illustrating a book, newspaper, etc.',
            senten:'an illustration of a yacht',
    
        },

        {
            word:'DEAL',
            wordlao:'ຈັດການ, ຂໍ້ຕົກລົງ',
            description:'take measures concerning (someone or something), ',
            senten:'"they seem incapable of dealing with the problem',
    
        },

        {
            word:'CONTRACT',
            wordlao:'ເງື່ອນໄຂ',
            description:'a written or spoken agreement, especially one concerning employment, sales, or tenancy, ',
            senten:'much of the produce is grown under contract"',
    
        },

        {
            word:'EDUCATION',
            wordlao:'ການສຶກສາ',
            description:'the process of receiving or giving systematic instruction, especially at a school or university',
            senten:'"a course of education',
    
        },

        {
            word:'GRADUATE',
            wordlao:'ຈົບການສຶກສາ',
            description:'a person who has successfully completed a course of study or training',
            senten:'he graduated in the summer with a 2:2 degree',
    
        },

        {
            word:'ILLNESS',
            wordlao:'ຄວາມເຈັບປ່ວຍ, ໂລກພະຍາດ',
            description:'a disease or period of sickness affecting the body or mind',
            senten:'"he died after a long illness',
    
        },

        {
            word:'FUTURE',
            wordlao:'ອະນາຄົດ',
            description:'a period of time following the moment of speaking or writing; ',
            senten:'we plan on getting married in the near future',
    
        },

        {
            word:'GIFT',
            wordlao:'ຂອງຂັວນ',
            description:'a thing given willingly to someone without payment; a present',
            senten:'"wedding gifts',
    
        },

        {
            word:'CULTURE',
            wordlao:'ວັດທະນາທຳ',
            description:'the ideas, customs, and social behaviour of a particular people or society:',
            senten:'people from many different cultures',
    
        },

        {
            word:'THEATER',
            wordlao:' ໂຮງລະຄອນ',
            description:'a building or outdoor area in which plays and other dramatic performances are given',
            senten:'"what made you want to go into the theatre',
    
        },

        {
            word:'COMPETITOR',
            wordlao:'ຄູ່ແຂ່ງ',
            description:'a person who takes part in a sporting contest',
            senten:'two competitors were banned for taking drugs',
    
        },

        {
            word:'DRUG',
            wordlao:'ສານເສບຕິດ',
            description:'a medicine or other substance which has a physiological',
            senten:"a new drug aimed at sufferers from Parkinson's disease",
    
        },

        {
            word:'DISEASE',
            wordlao:'ພະຍາດ',
            description:'a disorder of structure or function in a human, animal, or plant,',
            senten:'"bacterial meningitis is quite a rare disease',
    
        },

        {
            word:'RARE',
            wordlao:'ຫາຍາກ, ເປັນໄປໄດ້ຍາກ',
            description:'(of an event, situation, or condition) not occurring very often',
            senten:"it's rare to see a house so little altered",
    
        },

        {
            word:'REASON',
            wordlao:'ເຫດຜົນ',
            description:'a cause, explanation, or justification for an action or event',
            senten:"she asked him to return, but didn't give a reason",
    
        },

        {
            word:'RELEASE',
            wordlao:'ປ່ອຍ',
            description:'allow or enable to escape from confinement; set free',
            senten:'an official confirmed the prisoners would be released',
    
        },

        {
            word:'RELATIVE',
            wordlao:' ພີ່ນ້ອງ',
            description:'a person connected by blood or marriage:',
            senten:'much of my time is spent visiting relatives',
    
        },

        {
            word:'DISTANCE',
            wordlao:'ໄລຍະທາງ',
            description:'the length of the space between two points',
            senten:'you may have to walk long distances',
    
        },

        {
            word:'SIBLING',
            wordlao:'ອ້າຍນ້ອງ',
            description:'each of two or more children or offspring having one or both parents in common',
            senten:"I haven't even had any sibling practice",
    
        },

        {
            word:'IN COMMON',
            wordlao:'ສິ່ງທີ່ມີຄືກັນ',
            description:'in joint use or possession; shared:',
            senten:'We have a lot in common, you know?',
    
        },

        {
            word:'PRODUCTIVE',
            wordlao:'ມີປະສິດຕິພາບ',
            description:'producing or able to produce large amounts of goods, crops, or other commodities',
            senten:'the most productive employees',
    
        },

        {
            word:'PROCRASTINATION',
            wordlao:'ຜັດມື້ພັດວັນ',
            description:'the action of delaying or postponing something',
           senten:'your first tip is to avoid procrastination'
        },
            {
                word:'PERFECT',
                wordlao:'ສົມບູນແບບ',
                description:'having all the required or desirable elements, qualities,  ',
                senten:"a perfect summer's day",
        
            },
    
            {
                word:'FLAW',
                wordlao:'ຂໍ້ບົກພ່ອງ, ຕຳນິ',
                description:'a mark, blemish, or other imperfection which mars a substance or object:',
                senten:'a flaw in the glass',
        
            },
    
            {
                word:'MISUNDERSTOOD',
                wordlao:'ເຂົ້າໃຈຜິດ',
                description:'eincorrectly interpreted or understood',
                senten:'They proved that he misread events and misunderstood his own position',
        
            }, {
                word:'RECOVER',
                wordlao:'ຟື້ນຕົວ',
                description:'return to a normal state of health, mind, or strength',
                senten:'the economy has begun to recoverr',
        
            },
    
            {
                word:'MENTION',
                wordlao:'ກ່າວເຖິງ, ຕະນຶກເຖິງ',
                description:'a reference to someone or something',
                senten:'their eyes light up at a mention of Sartre',
        
            },
    
            {
                word:'COMPLAINT',
                wordlao:'ຮ້ອງຟ້ອງ',
                description:'a statement that something is unsatisfactory or unacceptable',
                senten:'"I intend to make an official complaint',
        
            },
    
            {
                word:'COMPLAIN',
                wordlao:'ຈົ່ມ, ຮ້ອງທຸກ',
                description:'express dissatisfaction or annoyance about something:',
                senten:'we all complained bitterly about the food"',
        
            },
    
            {
                word:'COMPILE',
                wordlao:'ລວບລວມ',
                description:'collect (information) in order to produce a list or book',
                senten:'the figures were compiled from a survey of 2,000 schoolchildren"',
        
            },
    
            {
                word:'ALMOST',
                wordlao:'ເກືອບ',
                description:'not quite; very nearly:',
                senten:'the place was almost empty',
        
            },
    
            {
                word:'REGULATE',
                wordlao:'ຄວບຄຸມ',
                description:'ontrol or maintain the rate or speed of (a machine or process) so that it operates properly',
                senten:'the Code regulates the takeovers of all public companies',
        
            },
    
            {
                word:'RELATIONSHIP',
                wordlao:'ຄວາມສຳພັນ',
                description:'the way in which two or more people or things are connected, or the state of being connected',
                senten:'"the study will assess the relationship between unemployment and political attitudes',
        
            },
    
            {
                word:'UNEMPLOYMENT',
                wordlao:'ການວ່າງງານ',
                description:'the state of being unemployed',
                senten:'"the serious level of unemployment among school-leavers',
        
            },
    
            {
                word:'GRAVITY',
                wordlao:'ແຮງດຶງດູດ',
                description:'the force that attracts a body towards the centre of the earth',
                senten:'Gravity is what keeps everything from floating around',
        
            },
    
            {
                word:'THEORY',
                wordlao:'ທິດສະດີ',
                description:'a supposition or a system of ideas intended to explain something',
                senten:"Darwin's theory of evolution",
        
            },
    
            {
                word:'CITIZEN',
                wordlao:'ພົນລະເມືອງ',
                description:'a legally recognized subject or national of a state or commonwealth',
                senten:"I'm not a citizen of the county, so I can't vote for you",
        
            },
    
            {
                word:'LAZY',
                wordlao:'ຂີ້ຄ້ານ',
                description:'unwilling to work or use energy',
                senten:'he was too lazy to cook',
        
            },
    
            {
                word:'BUSY',
                wordlao:'ຄາວຽກ',
                description:'having a great deal to do',
                senten:'he had been too busy to enjoy himself',
        
            },
    
            {
                word:'ELECTION',
                wordlao:'ການເລືອກຕັ້ງ',
                description:'a formal and organized choice by vote of a person for a political office or other position',
                senten:'the 1860 presidential election',
        
            },
    
            {
                word:'VOLUNTEER',
                wordlao:'ອາສາສະໝັກ',
                description:'a person who freely offers to take part in an enterprise or undertake a task',
                senten:'At the start of the training, the instructor asked for a volunteer',
        
            },
    
            {
                word:'DEVICE',
                wordlao:'ອຸປະກອນ',
                description:'a thing made or adapted for a particular purpose', 
                senten:'a measuring device',
        
            },
    
            {
                word:'ESPECCIALLY',
                wordlao:'ໂດຍສະເພາະ',
                description:'used to single out one person or thing over all others',
                senten:'a new song, written especially for Jonathan',
        
            },

        {
            word:'DESTINY',
            wordlao:'ໂຊກຊະຕາ',
            description:'the events that will necessarily happen to a particular person or thing in the future',
            senten:'she was unable to control her own destiny',
    
        },

        {
            word:'TARGET',
            wordlao:'ເປົ້າໝາຍ, ຈຸດມຸ້ງໝາຍ',
            description:'a person, object, or place selected as the aim of an attack',
            senten:'You must focus on controlling your breathing and keep your eye on the target',
    
        },
        {
            word:'RECEIVED',
            wordlao:'ໄດ້ຮັບ',
            description:'widely accepted as authoritative or true', 
            senten:'That evening he received a call in his office',
    
        },
        {
            word:'OFFICE',
            wordlao:'ຫ້ອງການ',
            description:'a room, set of rooms, or building used as a place for commercial', 
            senten:"I've repaired the computers in your office, too",
    
        },
        {
            word:'ATHLETE',
            wordlao:'ນັກກິລາ',
            description:'a person who is proficient in sports and other forms of physical exercise', 
            senten:'The athlete took medication so that he would not wheeze',
    
        },
        {
            word:'REPAIR',
            wordlao:'ການສ້ອມແປງ',
            description:'restore (something damaged, faulty, or worn) to a good condition', 
            senten:'the truck was beyond repair',
    
        },
        {
            word:'ABROAD',
            wordlao:'ຕ່າງປະເທດ',
            description:'in or to a foreign country or countries', 
            senten:'we usually go abroad for a week in May',
    
        },
        {
            word:'FOREIGNER',
            wordlao:'ຄົນຕ່າງປະເທດ',
            description:'a person not belonging to a particular place or group', 
            senten:"I can't speak a word of French so everyone can tell I'm a foreigner as soon as I arrive in France",
    
        },
        {
            word:'ABUSE',
            wordlao:'ການລ່ວງລະເມີດ',
            description:'use (something) to bad effect or for a bad purpose; misuse', 
            senten:'the judge abused his power by imposing the finese',
    
        },
        {
            word:'JUDGE(verb)',
            wordlao:'ຕັດສິນ,ຕີລາຄາ',
            description:'form an opinion or conclusion about', 
            senten:'You have no right to judge other people because of what they look like or what they believe',
    
        },
        {
            word:'JUDGE(NOUN)',
            wordlao:'ຜູ້ພິພາກສາ',
            description:'a person who is in charge of a trial in a court ', 
            senten:'In Britain, judges wear white wigs in court.',
    
        },
        {
            word:'ACADEMIC',
            wordlao:'ທາງວິຊາການ',
            description:'not of practical relevance; of only theoretical interest', 
            senten:'the debate has been largely academic',
    
        },
        {
            word:'DEBATE',
            wordlao:'ການໂຕ້ວາທີ',
            description:'a formal discussion on a particular matter in a public meeting or legislative assembly', 
            senten:"Over the year we have had several debates about future policy",
    
        },
        {
            word:'PROCEED',
            wordlao:'ດຳເນີນການຕໍ່',
            description:'to continue as planned:', 
            senten:'His lawyers have decided not to proceed with the case',
    
        },
        {
            word:'CASE',
            wordlao:'ກໍລະນີ',
            description:'a particular situation or example of something', 
            senten:"i wouldn't normally agree but I'll make an exception in this case",
    
        },
        {
            word:'ACCIDENT',
            wordlao:'ອຸບັດຕິເຫດ',
            description:'something bad that happens that is not expected', 
            senten:'have an accident Josh had an accident and spilled water all over his work.',
    
        },
        {
            word:'ACTIVITY',
            wordlao:'ກິດຈະກຳ, ການເຄື່ອນໄຫວ',
            description:"the situation in which a lot of things are happening or people are moving around", 
            senten:"There was a lot of activity in preparation for the Queen's visit",
    
        },
        {
            word:'ADAPT',
            wordlao:'ປັບຕົວ, ດັດແປງ',
            description:'to change, or to change something, to suit different conditions or uses', 
            senten:'The play had been adapted for (= changed to make it suitable for) children.',
    
        },
        {
            word:'ADD',
            wordlao:'ເພີ່ມ',
            description:'to put two or more numbers or amounts together to get a total', 
            senten:"add on Don't forget to add on your travelling expenses",
    
        },
        {
            word:'EXPENSES',
            wordlao:'ຄ່າໃຊ້ຈ່າຍ',
            description:'money that you spend when you are doing your job, that your employer will pay back to you', 
            senten:'I need to get my expenses approved',
    
        },
        {
            word:'FIRE',
            wordlao:'ໄລ່ອອກ',
            description:'to make someone leave their job,', 
            senten:' He was told that he was being fired for revealing confidential information',
    
        },
        {
            word:'COST',
            wordlao:'ລາຄາທີ່ຕ້ອງຈ່າຍ',
            description:'the amount of money needed to buy, do, or make something', 
            senten:"It's difficult for most people to deal with the rising cost of (= increasing price of) healthcare",
    
        },
        {
            word:'REVEAL',
            wordlao:'ເປີດເຜີຍ',
            description:'to make known or show something that is surprising or that was previously secret', 
            senten:'He would not reveal where he had hidden her chocolate eggs',
    
        },
        {
            word:'CONFIDENTIAL',
            wordlao:'ເປັນຄວາມລັບ',
            description:'secret or private, often in a formal, business, or military situation', 
            senten:'All information will be treated as strictly confidential',
    
        },
        {
            word:'HIRE',
            wordlao:'ຈ້າງ',
            description:'to employ someone or pay someone to do a particular job', 
            senten:'I was hired by the first company I applied to',
    
        },
        {
            word:'EFFORT',
            wordlao:'ຄວາມພະຍາຍາມ',
            description:'physical or mental activity needed to achieve something', 
            senten:"You can't expect to have any friends if you don't make the effort with people",
    
        },
        {
            word:'AGE',
            wordlao:'ອາຍຸ',
            description:'the period of time someone has been alive or something has existed', 
            senten:'Do you know the age of that building',
    
        },
        {
            word:'ALPHABET',
            wordlao:'ຕົວອັກສອນ',
            description:'a set of letters arranged in a fixed order, used for writing a language:', 
            senten:'Z comes after Y in the alphabet',
    
        },
        {
            word:'ALWAY',
            wordlao:'ສະເໝີ',
            description:'every time or all the time', 
            senten:'ฆhe always spells my name wrong',
    
        },
        {
            word:'SPELL',
            wordlao:'ສະກົດ',
            description:'to form a word or words with the letters in the correct order', 
            senten:'How do you spell receive?',
    
        },
        {
            word:'ASSUME',
            wordlao:'ສົມມຸດຕິຖານ, ຕວງ',
            description:'to accept something to be true without question or proof:', 
            senten:'I assumed (that) you knew each other because you went to the same school',
    
        },
        {
            word:'SUSPECT',
            wordlao:'ສົງໃສ',
            description:'to think or believe something to be true or probable', 
            senten:'I suspect he cheats the taxman',
    
        },
        {
            word:'ANALYSIS',
            wordlao:'ການວິເຄາະ',
            description:'the act of studying or examining something in detail', 
            senten:'Some of these arguments need further analysis',
    
        },
        {
            word:'MAD',
            wordlao:'ບໍ່ພໍໃຈ, ຄຽດ',
            description:'very angry or annoyed', 
            senten:'Are you still mad at me?',
    
        },
        {
            word:'POVERTY',
            wordlao:'ຄວາມທຸກຍາກ',
            description:'the condition of being extremely poor', 
            senten:'Helping to alleviate poverty in developing countries also helps to reduce environmental destruction.',
    
        },
        {
            word:'POOR',
            wordlao:'ທຸກຍາກ',
            description:"having little money and/or few possessions", 
            senten:"Most of the world's poorest countries are in Africa",
    
        },
        {
            word:'ANGRY',
            wordlao:'ຢາກຮ້າຍ',
            description:'having a strong feeling against someone who has behaved badly', 
            senten:"I don't understand what he's angry about",
    
        },
        {
            word:'ANNOYED',
            wordlao:'ຮູ້ສຶກລຳຄານ, ຢາກຮ້າຍ',
            description:'angry', 
            senten:'She was annoyed to discover that her husband had taken her car keys',
    
        },
        {
            word:'WHOLE',
            wordlao:'ທັງໝົດ',
            description:'complete or not divided', 
            senten:'I spent the whole day cleaning',
    
        },
        {
            word:'APPEAR',
            wordlao:'ປະກົດ',
            description:'to start to be seen or to be present', 
            senten:'He suddenly appeared in the doorway',
    
        },
        {
            word:'COPYRIGHT',
            wordlao:'ລິຂະສົດ',
            description:'the legal right to control the production and selling of a book, play, film, photograph, or piece of music', 
            senten:'His work is no longer protected by copyright',
    
        },
        {
            word:'ARTIST',
            wordlao:'ຈິດຕະກອນ',
            description:'someone who paints, draws, or makes sculptures', 
            senten:'The artist painted this picture using tiny brushstrokes',
    
        },
        {
            word:'ASPECT',
            wordlao:'ດ້ານໃດດ້ານໜຶ່ງ',
            description:'one part of a situation, problem, subject, etc', 
            senten:'Which aspects of the job do you most enjoy',
    
        },
        {
            word:'ATMOSPHERE',
            wordlao:'ບັນຍາກາດ',
            description:'the character, feeling, or mood of a place or situation', 
            senten:"There's a very relaxed atmosphere in our office",
    
        },
        {
            word:'PRESSURE',
            wordlao:'ຄວາມກົດດັນ',
            description:'a difficult situation that makes you feel worried or unhappy', 
            senten:"She's got a lot of pressure on her at work just now",
    
        },
        {
            word:'BACKGROUND',
            wordlao:'ພື້ນຫຼັງ',
            description:'the things that can be seen behind the main things or people in a picture', 
            senten:"The book's cover has white lettering on a blue background",
    
        },
        {
            word:'BEHIND',
            wordlao:'ດ້ານຫຼັງ,ເບື້ອງຫຼັງ',
            description:'at the back (of)', 
            senten:'Look behind you!',
    
        },
        {
            word:'BORROW',
            wordlao:'ຍືມ',
            description:'to get or receive something from someone with the intention of giving it back after a period of time', 
            senten:'She used to borrow money and not bother to pay it back',
    
        },
        {
            word:'PAY',
            wordlao:'ຈ່າຍ',
            description:'to give money to someone for something you want to buy or for services provided', 
            senten:'How much did you pay for the tickets?',
    
        },
        {
            word:'TICKET',
            wordlao:'ປີ້',
            description:'a small piece of paper or card given to someone', 
            senten:'a train/bus/plane ticket',
    
        },
        {
            word:'BORING',
            wordlao:'ໜ້າເບື່ອ',
            description:'not interesting or exciting', 
            senten:"It's boring to sit on the plane with nothing to read",
    
        },
        {
            word:'BORDER',
            wordlao:'ຊາຍແດນ',
            description:'a line that has been agreed to divide one country from another', 
            senten:'The train crosses the border between France and Spain',
    
        },
        {
            word:'DIVIDE',
            wordlao:'ແບ່ງ,ປັນສ່ວນ ',
            description:'to (cause to) separate into parts or groups', 
            senten:"At the end of the lecture, I'd like all the students to divide into small discussion groups",
    
        },
        {
            word:'BREATHE',
            wordlao:'ຫາຍໃຈ',
            description:'to move air into and out of the lungs', 
            senten:'When you breathe out, you expel air from your lungs',
    
        },
        {
            word:'CHURCH',
            wordlao:'ໂບດ',
            description:'a building for Christian religious activities', 
            senten:'they built the church on the edge of the village',
    
        },
        {
            word:'EDGE',
            wordlao:'ຂອບ, ແຄມ',
            description:'the outer or furthest point of something', 
            senten:"A man was standing at the water's edge with a small boy",
    
        },
        {
            word:'LIME',
            wordlao:'ໝາກນາວ',
            description:'a round fruit containing a lot of juice that is sour ', 
            senten:'I love the sour taste of limes',
    
        },
        {
            word:'SOUR',
            wordlao:'ລົດຊາດສົ້ມ',
            description:'aving a sharp, sometimes unpleasant, taste or smell, like a lemon, and not sweet', 
            senten:'These plums are a bit sour',
    
        },
        {
            word:'TASTE',
            wordlao:'ລົດຊາດ',
            description:'athe flavour of something, or the ability of a person or animal to recognize different flavours', 
            senten:'When you have a cold you often lose your sense of taste',
    
        },
        {
            word:'ESTIMATE',
            wordlao:'ຄາດຄະເນ,ຄາດການ',
            description:'to guess or calculate the cost, size, value, etc. of something', 
            senten:'It was difficult to estimate how many trees had been destroyed.',
    
        },
        {
            word:'DESTORY',
            wordlao:'ທຳລາຍ',
            description:'to damage something so badly that it cannot be used', 
            senten:'Most of the old part of the city was destroyed by bombs during the war.',
    
        },
        {
            word:'WAR',
            wordlao:'ສົງຄາມ',
            description:'armed fighting between two or more countries or groups, or a particular example of this', 
            senten:"They've been at war for the last five years",
    
        },
        {
            word:'SALTY',
            wordlao:'ເຄັມ',
            description:'tasting of salt or containing a lot of salt', 
            senten:'This bacon is too salty for me',
    
        },
        {
            word:'ELIMINATE',
            wordlao:'ກຳຈັດ',
            description:'to remove or take away someone or something', 
            senten:'We eliminated the possibility that it could have been an accident',
    
        },
        {
            word:'SURRENDER',
            wordlao:'ຍອມຈຳນົນ, ຍອມແພ້',
            description:'to stop fighting and admit defeat', 
            senten:'After their defeat in battle, the soldiers surrendered',
    
        },
        {
            word:'ALLERGIC',
            wordlao:'ແພ້,ພູມແພ້',
            description:'having an allergy', 
            senten:"I'm allergic to seafood",
    
        },
        {
            word:'EXPENSIVE',
            wordlao:'ມີລາຄາແພງ',
            description:'costing a lot of money', 
            senten:'She has expensive tastes (= she likes things that cost a lot of money)',
    
        },
        {
            word:'BANKNOTE',
            wordlao:'ທະນະບັດ',
            description:'a piece of printed paper that has a particular value as money', 
            senten:'and banknote from all over the place',

        },
        {
            word:'COMPARE',
            wordlao:'ປຽບທຽບ',
            description:'to examine or look for the difference between two or more things', 
            senten:'That seems expensive - have you compared prices in other shops?',
    
        },
        {
            word:'EXAMINE',
            wordlao:'ທົດສອບ, ພິຈາລະນາ',
            description:'a small piece of paper or card given to someone', 
            senten:'The research examined the effects of alcohol on long-term memory',
    
        },
        {
            word:'REMAIN',
            wordlao:'ຍັງຄົງ,ຢູ່ຕໍ່',
            description:'to stay in the same place or in the same condition', 
            senten:'The doctor ordered him to remain in bed for a few days.',
    
        },
        {
            word:'CLOSET',
            wordlao:'ຕູ້ເສື້ອຜ້າ',
            description:'used for storing things, especially clothes:', 
            senten:'a bedroom/linen/storage closet',
    
        },
        {
            word:'LEND',
            wordlao:'ໃຫ້ຍືມ',
            description:'to give something to someone for a short period of time', 
            senten:"She doesn't like lending her books",
    
        },
        {
            word:'INFORMATION',
            wordlao:'ຂໍ້ມູນ',
            description:'facts or details about a person, company, product', 
            senten:'It was a very interesting piece of information.',
    
        },
        {
            word:'VISIT',
            wordlao:'ຢຽ້ມຢາມ, ເຂົ້າພົບ',
            description:'to go to a place in order to look at it, or to a person in order to spend time with them', 
            senten:"Will you visit me when I'm in hospital?",
    
        },
        {
            word:'PRETEND',
            wordlao:'ທຳທ່າ, ຕິເຮັດ',
            description:'to behave as if something is true when you know that it is not', 
            senten:" He pretended (that) he didn't mind, but I knew that he did",
    
        },
        {
            word:'MIND(verb)',
            wordlao:'ຖືກສາ',
            description:'(used in questions and negatives) to be annoyed or worried by something', 
            senten:" I don't mind having a dog in the house so long as it's clean",
    
        },
        {
            word:'DISCIPLINE',
            wordlao:'ລະບຽບວິໄນ',
            description:'training that makes people more willing to obey or more able to control themselves', 
            senten:"I don't have enough (self) discipline to save money",
    
        },
        {
            word:'CONTAIN',
            wordlao:'ບັນຈຸ',
            description:'to have something inside or include something as a part', 
            senten:'How much liquid do you think this bottle contains?',
    
        },
        {
            word:'OBJECT',
            wordlao:'ວັດຖຸ',
            description:'a thing that you can see or touch but that is not usually a living animal, plant, or person:', 
            senten:'Several people reported seeing a strange object in the sky',
    
        },
        {
            word:'STRANGE',
            wordlao:'ແປກປະຫຼາດ',
            description:'not familiar, or difficult to understand; different', 
            senten:'We kept hearing strange noises coming from the attic',
    
        },
        {
            word:'STRANGER',
            wordlao:'ຄ້ນແປກໜ້າ',
            description:'someone you do not know', 
            senten:'My mother always warned me not to talk to strangers',
    
        },
        {
            word:'WARN',
            wordlao:'ເຕືອນ',
            description:'to make someone realize a possible danger or problem', 
            senten:"I'm warning you, don't mess about with those tools",
    
        },
        {
            word:'SUBJECT',
            wordlao:'ປະເດັນ',
            description:'the thing that is being discussed, considered, or studied:', 
            senten:'Our subject for discussion is homelessness.',
    
        },
        {
            word:'LOSS',
            wordlao:'ການສູນເສຍ',
            description:'the fact that you no longer have something or have less of something', 
            senten:'He suffered a gradual loss of memory',
    
        },
        {
            word:'FUNERAL',
            wordlao:'ງານສົບ',
            description:'a (usually religious) ceremony for burying or burning the body of a dead person', 
            senten:'The funeral will be held next Friday',
    
        },
        {
            word:'INSTRUCTION',
            wordlao:'ຄຳແນະນຳ',
            description:'advice and information about how to do or use something', 
            senten:'The cooking instructions say to bake it for half an hour',
    
        },
        {
            word:'COOK(verb)',
            wordlao:'ຕົ້ມສຸກ,ເຮັດອາຫານ',
            description:'When you cook food, you prepare it to be eaten by heating it in a particular way', 
            senten:"Don't cook vegetables for too long - they'll lose all their goodness.",
    
        },
        {
            word:'SYMBOL',
            wordlao:'ເຄື່ອງໝາຍ,ສັນຍາລັກ',
            description:'a sign, shape, or object that is used to represent something else', 
            senten:'A heart shape is the symbol of love',
    
        },
        {
            word:'HEAT',
            wordlao:'ຄວາມຮ້ອນ',
            description:'the quality of being hot or warm, or the temperature of something', 
            senten:'How do you manage to work in this heat without air conditioning?',
    
        },
        {
            word:'TOUGH',
            wordlao:'ຍາກ, ທົນທານ',
            description:'strong; not easily broken or made weaker', 
            senten:'These toys are made from tough plastic',
    
        },
        {
            word:'CHOOSE',
            wordlao:'ເລືອກ',
            description:'to decide what you want from two or more things or possibilities', 
            senten:'She had to choose between the two men in her life.',
    
        },
        {
            word:'DISCOUNT',
            wordlao:'ສ່ວນຫຼຸດ',
            description:'a reduction in the usual price', 
            senten:'They offer a ten percent discount on travel for students',
    
        },
        {
            word:'SPARE',
            wordlao:'ສຳຮອງ',
            description:'If something is spare, it is available to use because it is extra', 
            senten:'We have a spare room if you want to stay overnight with us.',
    
        },
        {
            word:'EARLY',
            wordlao:'ກ່ອນ, ເຊົ້າ',
            description:'near the beginning of a period of time, or before the usual, expected', 
            senten:'If you finish early you can go home',
    
        },
        {
            word:'CHALLENGE(verb)',
            wordlao:'ທ້າ',
            description:'o invite someone to compete or take part, especially in a game or argument', 
            senten:'They challenged us to a game of football',
    
        },
        {
            word:'CHALLENGE(noun)',
            wordlao:'ທ້າທາຍ',
            description:'the situation of being faced with', 
            senten:"It's going to be a difficult job but I'm sure she'll rise to the challenge",
    
        },
       {
                word:'OPTION',
                wordlao:'ຕົວເລືອກ',
                description:'one thing that can be chosen from a set of possibilities, or the freedom to make a choice', 
                senten:'There are various options open to someone who is willing to work hard',
        
            },
            {
                word:'PURSUE',
                wordlao:'ໄລ່ຕາມ, ຕິດຕາມ',
                description:'to follow someone or something', 
                senten:'The car was pursued by helicopters.',
        
            },
            {
                word:'OPINION',
                wordlao:'ຄວາມຄິດເຫັນ',
                description:'a thought or belief about something or someone', 
                senten:"What's your opinion about/on the matter?",
        
            },
            {
                word:'IMPRESS',
                wordlao:'ເຮັດໃຫ້ປະທັບໃຈ',
                description:'to cause someone to admire or respect you', 
                senten:'He tried to impress his teachers by using big words in all his essays.',
        
            },
            {
                word:'SCAR',
                wordlao:'ແຜເປັນ',
                description:'a mark left on part of the body after an injury,', 
                senten:'That burn will leave a bad scar',
        
            },
            {
                word:'INJURY',
                wordlao:'ບາດເຈັບ',
                description:"physical harm or damage to someone's body caused by an accident or an attack", 
                senten:'They were lucky to escape (without) injury',
        
            },
            {
                word:'SCARE',
                wordlao:'ເຮັດໃຫ້ຍ້ານ,ຕົກໃຈ',
                description:'to (make a person or animal) feel frightened', 
                senten:'Sudden noises scare her',
        
            },
            {
                word:'STRESSED',
                wordlao:'ຮູ້ສຶກກົດດັນ,ຄຽດ',
                description:'worried and nervous', 
                senten:'The kids are sick, I just lost my baby-sitter, and our toilet doesn’t work – no wonder I feel stressed-out',
        
            },
            {
                word:'SURVIVE',
                wordlao:'ຢູ່ລອດ',
                description:'to continue to live or exist', 
                senten:'These plants cannot survive in very cold conditions.',
        
            },
            {
                word:'EXTINCT',
                wordlao:'ສູນພັນ',
                description:'not now existing', 
                senten:'There is concern that the giant panda will soon become extinct',
        
            },
            {
                word:'EXIST',
                wordlao:'ມີຕົວຕົນ,ມີຢູ່',
                description:'to be, or to be real', 
                senten:'Poverty still exists in this country.',
        
            },
            {
                word:'RUMOR',
                wordlao:'ຂ່າວລື',
                description:'an unofficial interesting story or piece of news that might be true or invented', 
                senten:"I heard a rumor that she'd been seeing with someone",
        
            },
            {
                word:'CONFUSED',
                wordlao:'ຮູ້ສຶກສັບສົນ',
                description:'unable to think clearly or to understand something:', 
                senten:"Grandpa gets pretty confused sometimes, and doesn't even know what day it is",
        
            },
            {
                word:'HEAVY',
                wordlao:'ຄວາມໜັກ',
                description:'weighing a lot, and needing effort to move or lift', 
                senten:'How heavy is that box?',
        
            },
            {
                word:'REPOSITORY',
                wordlao:'ບ່ອນເກັບ',
                description:'a place where things are stored and can be found', 
                senten:'a deep repository for nuclear waste',
        
            },
            {
                word:'PRONOUNCE',
                wordlao:'ອອກສຽງ,ເວົ້າ',
                description:'to say a word or a letter in a particular way:', 
                senten:'How do you pronounce your surname?',
        
            },
            {
                word:'PRACTICE',
                wordlao:'ເຝິກ,ເຝິກຝົນ',
                description:'action rather than thought or ideas', 
                senten:'Everything gets better with practice, ',
        
            },

          



           






    


        
]
 