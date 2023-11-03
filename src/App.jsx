import { useEffect, useState } from 'react';
import './App.css';
import './tailwind.css';


function App() {
  // {
  //   question: "Hey there Question no 1",
  //   option: ["option1", "option2", "option3", "option4"],
  //   answer: 0,
  //   explanation: "Lorem,2 ipsum dolor sit amet consectetur adipisicing elit. Repudiandae beatae sit suscipit quaerat ipsa unde minima libero laboriosam velit accusamus totam, harum provident corporis itaque, eius aut? Unde, necessitatibus nesciunt.",
  //   id:0
  // }
  // {
  //   question:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem dolore optio magnam possimus earum hic quae, natus itaque eligendi beatae eos maiores ab? Iste culpa aut praesentium omnis eos.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem dolore optio magnam possimus earum hic quae, natus itaque eligendi beatae eos maiores ab? Iste culpa aut praesentium omnis eos.",
  //   id:2
  // }
  const questions = [
  
    {
      question: "I am an odd number. Take away one letter, and I become even. What am I?",
      answer: "seven",
      id: 1
    },
    {
      question: "Susan and Lisa decided to play tennis against each other. They bet $1 on each game they played. Susan won three bets and Lisa won $5. How many games did they play?",
      answer: "8",
      id: 1
    },
    {
      question: 'If I say "everything I tell you is a lie", am I telling you the truth or a lie?',
      answer: "paradox",
      id: 1
    },
    {
      question: "Who makes it, has no need of it. Who buys it, has no use for it. Who uses it can neither see nor feel it. What is it?",
      answer: "coffin",
      id: 1
    },
    {
      question: "What invention lets you look right through a wall?",
      answer: "window",
      id: 1
    },
    {
      question: "A girl has as many brothers and sisters. Each brother has only half as many brothers as sisters. How many brothers and sisters are there in the family? Give the number of brothers and sisters separated by a comma(,) no spaces.",
      answer: "1,2",
      id: 1
    },
    {
      question: "A family has two parents and six sons. Each of the sons has one sister. How many people are in the family?",
      answer: "9",
      id: 1
    },
    {
      question: "They come out at night without being called and are lost in the day without being stolen. What are they?",
      answer: "stars",
      id: 1
    },
    {
      question: "Where does Friday come before Thursday?",
      answer: "dictionary",
      id: 1
    },
    {
      question: "I am an English word with five letters. If you remove my last four, I am still pronounced the same. What am I?",
      answer: "queue",
      id: 1
    },
    {
      question: "I go in dry and come out wet, The longer I’m in, the stronger it will get. What am I?",
      answer: "tea",
      id: 1
    },
    {
      question: "I am a bird, I am a fruit and I am a person. What am I?",
      answer: "penguin",
      id: 1
    },
    {
      question: "In a certain city, 5% of all the persons in town have unlisted phone numbers. If you select 100 names at random from that city's phone directory, how many people selected will have unlisted phone numbers?",
      answer: "5",
      id: 1
    },
    {
      question: "The more you take, the more you leave behind. What am I?",
      answer: "footsteps",
      id: 1
    },
    {
      question: "In 1990, a person is 15 years old. In 1995, that same person is 10 years old. So when was he born?",
      answer: "born in 1990",
      id: 1
    },
    {
      question: "What comes next in the following pattern: 2, 3, 5, 8, 13, . .",
      answer: "21",
      id: 1
    },
    {
      question: "1, 3, 7, 15, 31, ...?",
      answer: "63",
      id: 1
    },
    {
      question: "3624, 4363, 3644, 4563, 3664, ...",
      answer: "4763",
      id: 1
    },
    {
      question: "15, 29, 43, 57, 71, __",
      answer: "85",
      id: 1
    },
    {
      question: "0, 6, 24, 60, 120, 210, …",
      answer: "336",
      id: 1
    },
    {
      question: "9, 11, 20, 31, 51, ..",
      answer: "72",
      id: 1
    },
    {
      question: "If the pattern is Blue, Red, Green, Yellow, what is the next color?",
      answer: "orange",
      id: 1
    },
    {
      question: "What number comes next in this sequence: 1, 11, 21, 1211, ___?",
      answer: "111221",
      id: 1
    },
    {
      question: "What is the next letter in the sequence: O, T, T, F, F, S, S, ___?",
      answer: "E",
      id: 1
    },
    {
      question: "If the word 'DESSERTS' is rearranged into a new word, what is the pattern that forms the new word?",
      answer: "stressed",
      id: 1
    },
    {
      question: "What is the next letter in the sequence: L, O, V, E, ___?",
      answer: "Y",
      id: 1
    },
    {
      question: "What word should come next in this sequence: Tree, Forest, Wood, ___?",
      answer: "branch",
      id: 1
    },
    {
      question: "ODD SUM PRE RAP ROW If the last alphabet in each of the word is changed to the next alphabet in English alphabetical order, how many words thus formed have two vowels?",
      answer: "1",
      id: 1
    }
  ];

  
  // <div className={`flex w-[80%]  px-4 py-1 rounded-xl gap-1 cursor-pointer ${((idx===submittedans&&displayanswer)||(idx===questions[j].answer&&submittedans!==-1))?(!isright&&idx!==questions[j].answer) ? 'border-2 border-red-400' : 'border-2 border-green-500':'border-0'}`} key={idx} onClick={() => handleCheckboxChange(idx)}>

  const [j, setj] = useState(0);
  const initial = [false, false, false, false];
  const [checked, setChecked] = useState(initial);
  const [answer, displayanswer] = useState(false);
  const [submittedans, setsubmittedans] = useState(-1);
  const [isright, setright] = useState(false); 
  const [count,setcount]=useState(0);
  const [points,setpoints]=useState(0);
  const [fillans,setfillans]=useState("");
  const [attemp,setattemp]=useState(0);
  const [time,settime]=useState(10);
  useEffect(()=>{

    const interval=setInterval(() => {
      if(time>0){
        settime(time-1);
      }
    }, 1000);
    return ()=>{clearInterval(interval)
    };
  },[time])
  const handleCheckboxChange = (idx) => {
    const temp = checked.map((item, i) => i === idx ? !item : false);
    setChecked(temp);
  };

  const formsubmit = (e) => {
    e.preventDefault();
    const selectedIdx = checked.findIndex((item) => item);

    if (selectedIdx === -1) {
      alert("Please select an option");
    } else {
      setattemp(attemp+1);
      setsubmittedans(selectedIdx);
      displayanswer(true);
      setcount(count+1);
      if (selectedIdx === questions[j].answer) {
        console.log("Correct answer");
        setright(true);
        setpoints(points+10);
      } else {
        console.log("Wrong answer");
        setright(false);
      }
    }
    const randomNumber = Math.floor(Math.random() * 8) ;
    setj(randomNumber);
     displayanswer(false);
     setChecked(initial);
     setsubmittedans(-1);
     setright(false);
  };



  const nextquest=(e)=>{
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 8) ;
    console.log(randomNumber);
    setj(j+1);
     displayanswer(false);
     setChecked(initial);
     setsubmittedans(-1);
     setright(false);
  }

  const handleChange=(e)=>{

    setfillans(e.target.value);
  }

  const formsubmitfill=(e)=>{
    e.preventDefault();
    console.log(fillans);
    if(fillans.length===0){
      alert("please fill the required field");
    }else{
    setattemp(attemp+1);
    if(fillans.toLowerCase()===questions[j].answer.toString()){
      setcount(count+10);
      alert("you got wight");
    }
    const randomNumber = Math.floor(Math.random() * 8) ;
    console.log(randomNumber);
    setj(randomNumber);
  }
  }

  const newgame=()=>{
    setcount(0);
    const randomNumber = Math.floor(Math.random() * 5) ;
   console.log(randomNumber);
   setj(randomNumber);
   displayanswer(false);
   setChecked(initial);
   setsubmittedans(-1);
   setpoints(0);
   setright(false);
   setpoints(0);
   setattemp(0);
   settime(120);
   setj(0);
  }

  const endgame=()=>{
    
    settime(0);
  }
  return (
    
    <div className='w-full py-32 min-h-screen flex justify-center items-center bg-gradient-to-r from-black to-blue-950 text-white '>
      {
        time>0?(
      <section className='flex flex-col w-10/12 items-center gap-2 '>
        <p className=' text-8xl font-bold '>Let's Play</p>
        <p className=' w-11/12 text-sm text-center text-fon'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          consequuntur sequi impedit dolor dolorem quidem amet blanditiis
          tenetur fugiat ipsam suscipit praesentium facere consequatur omnis
          aspernatur numquam eos, quas architecto.
        </p>
        <form action='' className='flex flex-col items-center w-full  mt-6 border-2 border-fon py-6 px-10 rounded-3xl' >
          <div className='w-full px-4'>
          <p className='py-6 m-0  text-start'>
            {questions[j].question}
          </p>
          </div>
          { questions[j].id===0?(
          <div className='grid grid-cols-2 w-full gap-4'>
            {initial.map((item, idx) => {
              return (
                <div className={`flex w-[80%]  px-4 py-1 rounded-xl gap-1 cursor-pointer `} key={idx} onClick={() => handleCheckboxChange(idx)}>
                  <input
                    type='checkbox'
                    checked={checked[idx]}
                    onChange={() => handleCheckboxChange(idx)}
                  />
                  <p>{questions[j].option[idx]}</p>
                </div>
              );
            })}
            <div className='flex gap-1'>
            <button className={` w-32 mt-5 px-6 font-bold hover:scale-105 transition duration-1000  py-1 bg-white rounded-3xl text-black`} onClick={formsubmit}>submit</button>
         <button className={` mt-5 w-32  px-6 font-bold hover:scale-105 transition duration-1000  py-1 bg-white rounded-3xl text-black`} onClick={nextquest}>Next</button>
         </div>
          </div>
         
          ):( questions[j].id===1?
            (<section className='w-full'>
                 <input className='w-9/12 px-3 h-10 outline-none border-none bg-inherit border-b-2 border-b-white' type="text" placeholder='answer' onChange={handleChange}/>
                 <div className='flex gap-2'>
                 <button className={` mt-5 w-32 px-6 font-bold hover:scale-105 transition duration-1000  py-1 bg-white rounded-3xl text-black`} onClick={formsubmitfill}>submit</button>
                <button className={` mt-5 w-32 px-6 font-bold hover:scale-105 transition duration-1000  py-1 bg-white rounded-3xl text-black`} onClick={nextquest}>Next</button>
                </div>
            </section>):(
              <section>
                {/* <p>{questions[j].question}</p> */}
                <button className={` mt-5 w-32 px-6 font-bold hover:scale-105 transition duration-1000  py-1 bg-white rounded-3xl text-black`} onClick={nextquest}>Next</button>
              </section>
            )
          )
      }
          
          {/* <div className=''>
          <p className={`${!answer ? 'hidden' : 'flex'} mt-4 font-bold text-2xl`}>Solution</p>
          <p className={`${!answer ? 'hidden' : 'flex'} mt-2`}>{questions[j].explanation}</p>
        </div> */}
        </form>
      </section>):(
        <section className=''>
          <p>Hey,You played well  </p>
          <div className='flex gap-3'>
          <div >
            <div>Questions Attempted</div>
            <div>{attemp}</div>
          </div>
          <div>
            <div>score</div>
            <div>{points}</div>
          </div>

          </div>
          {/* <button onClick={()=>{
            
          }} >New Game</button> */}
        </section>
      )
}
      <div className={`w-36 flex justify-center items-center h-36 fixed top-6 right-10 bg-gradient-to-r from-green-500 to-blue-500 mr-10 rounded-full`}>
        <div className={` w-32 h-32 flex justify-center items-center rounded-full bg-blue-200`}>
         <p className='text-6xl font-bold text-black font-sans'>{time}</p>
         </div>
      </div>
      <div className={`fixed top-6 left-10`}>
        <div className={` `}>
          <div className='flex gap-3'>
         <button className='w-28 px-6 font-bold hover:scale-105 transition duration-1000  py-1 bg-white rounded-3xl bg-inherit border-2 border-white text-white' onClick={newgame}>start</button>
         <button className='w-28 px-6 font-bold hover:scale-105 transition duration-1000  py-1 bg-white rounded-3xl  border-2 border-white text-black' onClick={endgame}>end</button>
         </div>
         </div>
      </div>
    </div>
          
  );
}

export default App;
