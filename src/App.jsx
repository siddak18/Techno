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
      question: "What does GPS stand for in the context of navigation and location tracking?",
      option: ["Global Positioning System"," Geographic Positioning Service","General Positioning System "," Grounded Positioning System"],
      answer: 0,
      id:0
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
    },{
      question: "Who was the first woman to fly solo across the Atlantic Ocean?",
      option: ["Amelia Earhart","Bessie Coleman","Harriet Quimby","Valentina Tereshkova"],
      answer: 0,
      id:0
    },{
      question: "What is the largest ocean in the world?",
      option: ["Atlantic Ocean","Indian Ocean"," Arctic Ocean","Pacific Ocean"],
      answer: 3,
      id:0
    },
    {
      question: "A family has two parents and six sons. Each of the sons has one sister. How many people are in the family?",
      answer: 9,
      id: 1
    },
    {
      question: "They come out at night without being called and are lost in the day without being stolen. What are they?",
      answer: "stars",
      id: 1
    },{
      question: "Which country is known as the Land of the Rising Sun?",
      option: ["China","South Korea","Japan","Thailand"],
      answer: 2,
      id:0
    },{
      question: "Who wrote the play Romeo and Juliet?",
      option: ["William Shakespeare","Charles Dickens","Jane Austen","Leo Tolstoy"],
      answer: 0,
      id:0
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
    },{
      question: "Which planet is known as the Red Planet?",
      option: ["Venus","Mars","Jupiter","Saturn"],
      answer: 1,
      id:0
    },{
      question: "What is the largest organ in the human body?",
      option: ["Heart","Brain","Skin","Liver"],
      answer: 2,
      id:0
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
      question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
      option: ["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"],
      answer: 2,
      id:0
    },{
      question: "Who is often referred to as the Father of India?",
      option: ["Mahatma Gandhi","Jawaharlal Nehru","Sardar Vallabhbhai Patel","Subhas Chandra Bose"],
      answer: 0,
      id:0
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
    },{
      question: "What is the largest planet in our solar system?",
      option: ["Earth","Mars","Jupiter","Saturn"],
      answer: 2,
      id:0
    },{
      question: "Question: Which gas makes up the majority of Earth's atmosphere?",
      option: ["Carbon dioxide","Oxygen","Nitrogen","Hydrogen"],
      answer: 2,
      id:0
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
    },{
      question: "What is the freezing point of water in degrees Celsius?",
      option: ["0°C","32°C","-273.15°C","100°C"],
      answer: 0,
      id:0
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
    },{
      question: "The equation of a straight line is given by y = 3x + 2. What is the slope of the line?",
      option: ["3", "2", "-3", "-2"],
      answer: 0,
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
    },{
      question: "Solve for x: 2x + 5 = 11.",
      option: ["x = 3", "x = 6", "x = 8", "x = 11"],
      answer: 0,
      id: 0
    },
    {
      question: "Which of the following is a prime number?",
      option: ["21", "37", "49", "63"],
      answer: 1,
      id: 0
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
    },{
      question: "What is the area of a triangle with base 6 units and height 8 units?",
      option: ["24 square units", "30 square units", "36 square units", "48 square units"],
      answer: 0,
      id: 0
    },
    {
      question: "If a car travels at a constant speed of 60 miles per hour, how far will it travel in 3 hours?",
      option: ["90 miles", "120 miles", "150 miles", "180 miles"],
      answer: 3,
      id: 0
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
    },{
      question: "What is the value of 5! (5 factorial)?",
      option: ["20", "60", "120", "720"],
      answer: 2,
      id: 0
    },
    {
      question: "If sin(θ) = 0.6 and θ is an acute angle, what is cos(θ)?",
      option: ["0.3", "0.4", "0.5", "0.6"],
      answer: 1,
      id: 0
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
    },{
      question: "Simplify the expression: (2x^2 + 3x - 5) + (4x^2 - 2x + 7).",
      option: ["6x^2 + x + 2", "6x^2 + x + 12", "6x^2 - 5x + 2", "6x^2 + x - 2"],
      answer: 0,
      id: 0
    },
    {
      question: "If a rectangle has a length of 10 units and a width of 4 units, what is its perimeter?",
      option: ["24 units", "28 units", "36 units", "40 units"],
      answer: 1,
      id: 0
    },{
      question: "What is the chemical symbol for gold?",
      option: ["Go", "Gd", "Au", "Ag"],
      answer: 2,
      id: 0
    },
    {
      question: "In computer science, what does CPU stand for?",
      option: ["Central Processing Unit", "Computer Processing Unit", "Control Processing Unit", "Central Program Unit"],
      answer: 0,
      id: 0
    },
    {
      question: "What is the SI unit of electric current?",
      option: ["Ampere", "Volt", "Watt", "Ohm"],
      answer: 0,
      id: 0
    },
    {
      question: "Who is considered the father of modern physics and is famous for his theory of relativity?",
      option: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      answer: 1,
      id: 0
    },
    {
      question: "What is the chemical formula for water?",
      option: ["H2O", "CO2", "CH4", "O2"],
      answer: 0,
      id: 0
    },
    {
      question: "Which planet is known as the 'Red Planet' due to its reddish appearance?",
      option: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: 1,
      id: 0
    },
    {
      question: "What is the freezing point of water in degrees Celsius?",
      option: ["0°C", "32°C", "-273.15°C", "100°C"],
      answer: 0,
      id: 0
    },
    {
      question: "Who is the author of the play 'Romeo and Juliet'?",
      option: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
      answer: 0,
      id: 0
    },
    {
      question: "Which gas makes up the majority of Earth's atmosphere?",
      option: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      answer: 2,
      id: 0
    }
  ];

  
  
  // const generalKnowledgeQuestionsAndAnswers = [
  //   {
  //     question: "What is the largest planet in our solar system?",
  //     option: ["Earth", "Mars", "Jupiter", "Saturn"],
  //     answer: 2,
  //     id: 0
  //   },
  //   {
  //     question: "Who is often referred to as the 'Father of India'?",
  //     option: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose"],
  //     answer: 0,
  //     id: 0
  //   },
  //   {
  //     question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
  //     option: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  //     answer: 2,
  //     id: 0
  //   },
  //   {
  //     question: "What is the largest organ in the human body?",
  //     option: ["Heart", "Brain", "Skin", "Liver"],
  //     answer: 2,
  //     id: 0
  //   },
  //   {
  //     question: "Which planet is known as the 'Red Planet'?",
  //     option: ["Venus", "Mars", "Jupiter", "Saturn"],
  //     answer: 1,
  //     id: 0
  //   },
  //   {
  //     question: "Who wrote the play 'Romeo and Juliet'?",
  //     option: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
  //     answer: 0,
  //     id: 0
  //   },
  //   {
  //     question: "Which country is known as the 'Land of the Rising Sun'?",
  //     option: ["China", "South Korea", "Japan", "Thailand"],
  //     answer: 2,
  //     id: 0
  //   },
  //   {
  //     question: "What is the largest ocean in the world?",
  //     option: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
  //     answer: 3,
  //     id: 0
  //   },
  //   {
  //     question: "Who was the first woman to fly solo across the Atlantic Ocean?",
  //     option: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Valentina Tereshkova"],
  //     answer: 0,
  //     id: 0
  //   },
  //   {
  //     question: "What is the capital of France?",
  //     option: ["London", "Berlin", "Madrid", "Paris"],
  //     answer: 3,
  //     id: 0
  //   },
  //   {
  //     question: "What does GPS stand for in the context of navigation and location tracking?",
  //     option: ["Global Positioning System", "Geographic Positioning Service", "General Positioning System", "Grounded Positioning System"],
  //     answer: 0,
  //     id: 0
  //   }, {
  //     question: "The equation of a straight line is given by y = 3x + 2. What is the slope of the line?",
  //     option: ["3", "2", "-3", "-2"],
  //     answer: 0,
  //     id: 0
  //   },
  //   {
  //     question: "If a quadratic equation has no real roots, what can be said about the discriminant (D)?",
  //     option: ["D > 0", "D = 0", "D < 0", "D can be any value"],
  //     answer: 2,
  //     id: 0
  //   },
  //   {
  //     question: "Solve for x: 2x + 5 = 11.",
  //     option: ["x = 3", "x = 6", "x = 8", "x = 11"],
  //     answer: 0,
  //     id: 0
  //   },
  //   {
  //     question: "Which of the following is a prime number?",
  //     option: ["21", "37", "49", "63"],
  //     answer: 1,
  //     id: 0
  //   },
  //   {
  //     question: "What is the area of a triangle with base 6 units and height 8 units?",
  //     option: ["24 square units", "30 square units", "36 square units", "48 square units"],
  //     answer: 0,
  //     id: 0
  //   },
  //   {
  //     question: "If a car travels at a constant speed of 60 miles per hour, how far will it travel in 3 hours?",
  //     option: ["90 miles", "120 miles", "150 miles", "180 miles"],
  //     answer: 3,
  //     id: 0
  //   },
  //   {
  //     question: "What is the value of 5! (5 factorial)?",
  //     option: ["20", "60", "120", "720"],
  //     answer: 2,
  //     id: 0
  //   },
  //   {
  //     question: "If sin(θ) = 0.6 and θ is an acute angle, what is cos(θ)?",
  //     option: ["0.3", "0.4", "0.5", "0.6"],
  //     answer: 1,
  //     id: 0
  //   },
  //   {
  //     question: "Simplify the expression: (2x^2 + 3x - 5) + (4x^2 - 2x + 7).",
  //     option: ["6x^2 + x + 2", "6x^2 + x + 12", "6x^2 - 5x + 2", "6x^2 + x - 2"],
  //     answer: 0,
  //     id: 0
  //   },
  //   {
  //     question: "If a rectangle has a length of 10 units and a width of 4 units, what is its perimeter?",
  //     option: ["24 units", "28 units", "36 units", "40 units"],
  //     answer: 1,
  //     id: 0
  //   },
  //   {
  //       question: "",
  //       option: ["","","",""],
  //       answer: 0,
  //       id:0
  //     }
  // ];

  
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
  const [time,settime]=useState(0);
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
    if(j===questions.length-2){
      endgame();
    }else{
    setj((j+1)%questions.length);
     displayanswer(false);
     setChecked(initial);
     setsubmittedans(-1);
     setright(false);
    }
  };



  const nextquest=(e)=>{
    console.log(j);
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 8) ;
    
   
    setj((j+1)%questions.length);
     displayanswer(false);
     setChecked(initial);
     setsubmittedans(-1);
     setright(false);
    
  }

  const handleChange=(e)=>{

    setfillans(e.target.value);
  }

  console.log(questions[32]);
  const formsubmitfill=(e)=>{
    e.preventDefault();
    console.log(questions[j].answer.toString(),fillans);
    if(fillans.length===0){
      alert("please fill the required field");
    }else{
    setattemp(attemp+1);
    // if(fillans.toLowerCase().toString()===questions[j].answer.toString()){
    console.log(fillans.toLowerCase().toString());
    if(fillans===questions[j].answer){
      setcount(count+10);
      setpoints(points+10);
      setfillans("");
    }else{
      setfillans("");
        }
    const randomNumber = Math.floor(Math.random() * 8) ;
  
    setj(j+1);
  }
  }

  const newgame=()=>{
    setcount(0);
    const randomNumber = Math.floor(Math.random() * 5) ;
   
   setj((j+1)%questions.length);
   displayanswer(false);
   setChecked(initial);
   setsubmittedans(-1);
   setpoints(0);
   setright(false);
   setpoints(0);
   setattemp(0);
   settime(90);
   setj(0);
  }

  const endgame=()=>{
    
    settime(0);
  }

  return (
    
    <div className='w-full py-32 min-h-screen flex justify-center items-center bg-gradient-to-r from-black to-blue-950 text-white '>
      {
        time>0&&j<questions.length-1?(
      <section className='flex flex-col w-10/12 items-center gap-2 transition duration-1000'>
        <p className=' text-8xl font-bold '>Let's Play</p>
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
         <button className={` mt-5 w-32  px-6 font-bold hover:scale-105 transition duration-1000  py-1 bg-white rounded-3xl text-black`} onClick={nextquest}>skip</button>
         </div>
          </div>
         
          ):( questions[j].id===1?
            (<section className='w-full'>
                 <input className='w-9/12 px-3 h-10 outline-none border-none bg-inherit border-b-2 border-b-white' type="text" placeholder='answer' value={fillans} onChange={handleChange}/>
                 <div className='flex gap-2'>
                 <button className={` mt-5 w-32 px-6 font-bold hover:scale-105 transition duration-1000  py-1 bg-white rounded-3xl text-black`} onClick={formsubmitfill}>submit</button>
                <button className={` mt-5 w-32 px-6 font-bold hover:scale-105 transition duration-1000  py-1 bg-white rounded-3xl text-black`} onClick={nextquest}>skip</button>
                </div>
            </section>):(
              <section>
                {/* <p>{questions[j].question}</p> */}
                <button className={` mt-5 w-32 px-6 font-bold hover:scale-105 transition duration-1000  py-1 bg-white rounded-3xl text-black`} onClick={nextquest}>next</button>
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
         <button className='w-28 px-6 font-bold hover:scale-105 transition duration-1000  py-1  rounded-3xl bg-inherit border-2 border-white text-white' onClick={newgame}>start</button>
         <button className='w-28 px-6 font-bold hover:scale-105 transition duration-1000  py-1 bg-white rounded-3xl  border-2 border-white text-black' onClick={endgame}>end</button>
         </div>
         </div>
      </div>
    </div>
          
  );
}

export default App;
