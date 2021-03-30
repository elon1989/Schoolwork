import ReactPost from './ReactPost'

const BulletinBoard = () => {

    const questions = [
        {
            question: 'Vad är tre fördelar med att använda React?',
            answer: ['Man kan lätt dela upp stora project till mindre delar.',' React gör det lättare att underhålla kod då strukturen är renare.','Den tredje fördelen med React är att det är ett stort ramverk med en stor community av användare som ständigt underhåller och förbättrar språket.']
        },
        {
            question:'Vad är tre nackdelar med att använda React?',
            answer:['En av nackdelarna med React att också en av dess fördelar, det är att react väldigt snabbt utvecklas och dokumentation och tidigare kunskap snabbt kan bli obsolet.', 'En annan nackdel jag har funnit med React är att man städigt måste ladda hem react-dom.', 'Sista nackdelen som jag kan hitta är JSX och hur man som kodare behöver lära sig ny markup']
        },
        {
            question:'Vad är tre skillnader mellan React och Angular?',
            answer: ['Angular är baserat på TS react är baserat på JS.','React erbjuder även större frihet att skriva sin kod då angular kommer med färdiga biblotek och har i åtanke hur man ska utforma sitt projekt.', 'En annan skillnad är data-bidning då react binder data en väg dvs component till DOM men angular binder data två gånger component till DOM och även DOM till component. ']
        },
        {
            question:'Vad är tre bibliotek man kan använda med React?',
            answer:['Create-react-app som hjälper användare att bygga upp ett react projekt.',' Sen det vanligaste UI biblioteket är material UI som hjälper användare med design.','Det tredje biblioteket jag har valt är styled components som underlättare CSS då man kan dela upp CSS-kod i varje component istället för att ha samma css syntax genom hela appen']
        }
    ]

    return (
        <div>
            {questions.map((question, i) => {
                return (
                    <ReactPost {...question} key={i}/>
                    )
            })  
            }
        </div>
    )
}

export default BulletinBoard