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
      question: "Welcome click next to begin",
      id: 2,
      time:130
    },
    {
      //1
      question: "A man fell in a well. The well is 30 meters deep. In a day, he can climb 4 meters, but he slips down 3 meters. How many days would he take to come out of the well?",
      id: 2,
      time:60
    },
    {
      //2
      question: "Three friends decide to split the bill for a meal, and it totals $30. Each friend contributes $10. Later, the restaurant owner realizes there was a mistake and that the bill should have only been $25. The owner gives $5 to the waiter to return to the friends. However, the waiter decides to keep $2 for himself and gives $1 back to each friend. Now, each friend has paid $9 (a total of $27), and the waiter has $2, which adds up to $29. What happened to the missing dollar?",
      id: 2,
      time:60
    },
    {
      //3
      question: "Rohan asked his younger brother, Can you tell me the names of 20 words that don't have the vowel a you need to tell this in just 30 seconds?",
      id: 2,
      time:60
    },
    {
      //4
      question: "Four people need to cross a bridge at night, and they have only one flashlight. The bridge can only hold two people at a time. It takes the following times for each person to cross the bridge: 1 minute, 2 minutes, 5 minutes, and 10 minutes. When two people cross the bridge together, they must travel at the slower person's pace. What is the fastest time in which all four people can cross the bridge?",
      id: 2,
      time:60
    },
    {
      //5
      question: "Three ants are sitting at the three corners of an equilateral triangle. Each ant randomly picks a direction and starts to move along the edge of the triangle. What is the probability that none of the ants collide? ",
      id: 2,
      time:60
    },
    {
      //6
      question: "You have got someone working for you for five days and a gold bar to pay him. You must give them a piece of gold at the end of every day. What are the fewest number of cuts to the bar of gold that will allow you to pay him 1/5th each day? ",
      id: 2,
      time:60
    },
    {
      //7
      question: "You have hired someone to work for you for seven days, and you have a gold bar to pay him. You must give him a piece of gold every day. What is the least number of cuts you can make to the gold bar such that you can pay them 1/7th of it each day?",
      id: 2,
      time:60
    },
    {
      //8
      question: "You are faced with two doors. One door leads to certain death, and the other door leads to freedom. There are two guards, one in front of each door. One guard always tells the truth, and the other always lies. You don't know which guard is which, and you don't know which door leads to freedom. You can ask one guard one question to determine which door to choose. What question should you ask?",
      id: 2,
      time:60
    },
    {
      //9
      question: "You come across two individuals, one always tells the truth, and the other always lies. They stand next to each other, but you don't know who is who. You can ask one yes-or-no question to determine which one is the truth-teller. What question should you ask?",
      id: 2,
      time:60
    },
    {
      //10
      question: "A man who lives on the 10th floor of a building takes the elevator down to the ground floor when he leaves for work. However, when he returns, he takes the elevator to the 7th floor and then walks up the stairs to reach his apartment on the 10th floor. Why does he do this?",
      id: 2,
      time:60
    },
    {
      //11
      question: "A car has 4 tyres and 1 spare tyre. Each tyre can travel a maximum distance of 20000 miles before wearing off. What is the maximum distance the car can travel before you are forced to buy a new tyre? You are allowed to change tyres (using the spare tyre) an unlimited number of times. ",
      id: 2,
      time:100
    },
    {
      //12
      question: "There are 100 closed lockers in a hallway. A student starts by opening all 100 lockers. Then the student closes every second locker (2nd, 4th, 6th, etc.). Next, the student goes to every third locker and toggles it (if it's closed, the student opens it; if it's open, the student closes it). The student continues this process for 100 lockers. After the 100th pass in the hallway, How many lockers will be open?",
      id: 2,
      time:100
    },
    {
      // 13
      question: "If the time is 3:15 when you look at a clock, what’s the angle between the hour hand and the minute hand?",
      id: 2,
      time:60
    },
    {
      // 14
      question: "You begin in the top left corner of a 6×6 grid, and your objective is to move to the bottom right corner. There are just two directions you can move: right or down. Both diagonal and backwards movements are prohibited. How many different ways are there to get from the start to the finish? ",
      id: 2,
      time:100
    },
    {
      //15
      question: "You are provided with a chessboard and are asked to find the number of squares in it. A chessboard is a board with 8 x 8 grids in it as represented below.",
      id: 2,
      time:100
    },
    {
      //16
      question: "There are 20 green balls and 16 black balls in a bag. Any two balls are removed at each step and are replaced with a new ball based on the following conditions \n 1.	If they are of the same color, they are replaced by a green ball. \n 2.	If hey are of different colors, they are replaced with a black ball. \n\n Find the last ball to remain after the entire process. Here replacement means that the new ball is inserted into the bag" ,
     
      id: 2,
      time:100
    },
    {
      //17
      question: "Suppose a newly-born pair of rabbits, one male, one female, are put in a field. Rabbits can mate at the age of one month so that at the end of its second month, a female can produce another pair of rabbits. Suppose that rabbits never die and that the female always has one new pair (one male, one female) every month from the second month on. How many pairs will there be in one year?",
      id: 2,
      time:150
    },
    {
      //18
      question: "There are 10 kids named ’A’, ‘B’, ‘C’, ‘D’, ‘E’, ‘F’, ‘G’, ‘H’, ‘I’, ‘J’ . They have some candies and they decided to divide these candies equally among themselves. So they divide the candies into 10 parts but the last kid ‘J’ got 1 candy less than other kids. So the remaining 9 kids betrayed ‘J’. They again decided to divide the candies into 9 parts. But this time again the last kid ‘I’ got 1 less candy than other kids. So again the remaining 8 kids betrayed ‘I’ and tried to divide all candies in between the remaining 8 kids. But again this time ‘H’ got one less candy than the other. Now, this process goes on until 1 kid left i.e. is ‘A’. After that ‘A’ takes all the candies and runs away. Now you have to guess the total number of candies.",
      id: 2,
      time:150
    },
    {
      //19
      question: "You have given a square having a side of length X. Another square forms inside the first square by joining the midpoint of the side of the first square. Now 3rd square is formed inside the 2nd one by joining centers of the side of the 2nd square and so on. You have n squares inside each other. And you are given the side length of the largest square. You have to find the area of these nth squares.",
      id: 2,
      time:150
    },
    {
      //20
      question: "There are 2187 balls, out of which 1 is heavy. Find the minimum number of attempts the balls have to be weighed for finding out the heavy ball.",
      id: 2,
      time:150
    },
    {
      // 21
      question: "100 prisoners in jail are standing in a queue facing in one direction. Each prisoner is wearing a hat of color either black or red. A prisoner can see hats of all prisoners in front of him in the queue, but cannot see his hat and hats of prisoners standing behind him. The jailer is going to ask color of each prisoner’s hat starting from the last prisoner in queue. If a prisoner tells the correct color, then is saved, otherwise executed. How many prisoners can be saved at most if they are allowed to discuss a strategy before the jailer starts asking colors of their hats. ",
      id: 2,
      time:150
    },
    {
      // 22
      question :  "Given a grid of dimension 7x7 where each cell in the grid can have values 0, 1 or 2 which has the following meaning: 0 : Empty cell \n 1 : Cells have fresh oranges\n 2 : Cells have rotten oranges \n A rotten orange at index can rot other fresh orange at indexes up, down, left and right in unit time. Find out the minimum time to rot the oranges. ",
      id: 2,
      time:150
    },
    {
      // 23
      question :  "4)	Given a square grid of size 4, each cell of which contains integer cost which represents a cost to traverse through that cell, we need to find a path from top left cell to bottom right cell by which the total cost incurred is minimum. You can only move up, down, left and right.",
      id: 2,
      time:150
    },
    {
      // 24
      question :  "Given a grid of dimension 7x7 where each cell in the grid can have values 0, 1 or 2 which has the following meaning: 0 : Empty cell \n 1 : Cells have fresh oranges\n 2 : Cells have rotten oranges \n A rotten orange at index can rot other fresh orange at indexes up, down, left and right in unit time. Find out the minimum time to rot the oranges. ",
      id: 2,
      time:150
    },
    {
      // 25
      question: "A frog jumps either 1, or 2, steps to go to the top. In how many ways can it reach the 6th step.",
      id: 2,
      time:150
    },
    {
      // 26
      question: "Find the highest sum by selecting numbers from a sequence, without picking adjacent numbers.\n 4, 9, 1, 5, 3, 8, 12, 6, 15, 7, 10",
      id: 2,
      time:150
    },
    {
      // 27
      question: "Given 4 different coins of value {2, 5, 3, 6} representing different denominations of currency and an integer sum = 16, find the number of ways you can make sum by using different combinations from coins.  ",
      id: 2,
      time:150
    },
    {
      // 28
      question: "A top secret message containing letters from A-Z is being encoded to numbers using the following mapping: 'A' -> 1, 'B' -> 2 ..... 'Z' -> 26. You are an FBI agent. You have to determine the total number of ways that message can be decoded. Find it for input: str = “ 12214”" ,
      id: 2,
      time:150
    },
    {
      // 29
      question: "Given set of integers, find the length of the longest (strictly) increasing subsequence from the given array. A = {0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15}",
      id: 2,
      time:150
    },
    {
      // 30
      question: "Given a 4 X 4 matrix with your initial position at the top-left cell, find the number of possible unique paths to reach the bottom-right cell of the matrix from the initial position.",
      id: 2,
      time:150
    },
    {
      // 31
      question: "There are n sticks with some lengths. Your task is to modify the sticks so that each stick has the same length.You can either lengthen and shorten each stick. Both operations cost x where x is the difference between the new and original length.What is the minimum total cost? Input- 2 3 1 5 2",
      id: 2,
      time:150
    },
    {
      // 32
      question: "The n-queens is the problem of placing n queens on n × n chessboard such that no two queens can attack each other. Given an integer n, return any one solution to the n -queens puzzle. the solution contains a distinct boards configuration of the queen’s placement, where ‘Q’ and ‘.’ indicate queen and empty space respectively.find the solution for n = 8",
      id: 2,
      time:150
    },
    {
      // 33
      question: "The goal is to move all the disks to the right stack using the middle stack. On each move you can move the uppermost disk from a stack to another stack. In addition, it is not allowed to place a larger disk on a smaller disk. Your task is to find a solution that minimizes the number of moves for no. of disks = 4.",
      id: 2,
      time:150
    },
    {
      // 34
      question: "Your task is to count for k=1,2,....,n the number of ways two knights can be placed on a k*k chessboard so that they do not attack each other. given k = 4,",
      id: 2,
      time:150
    },
    {
      // 35
      question: "You have a 3-liter and a 5-liter water container, and neither one is marked aside from the total volume. A tap is also now flowing. In order to measure out exactly 4 liters of water, we must utilize the containers and the tap in the right way. How is this possible?",
      id: 2,
      time:150
    },
    {
      // 36
      question: "Two outlet pipes A and B are connected to a full tank. Pipe A alone can empty the tank in 10 minutes and pipe B alone can empty the tank in 30 minutes. If both are opened together, how much time will it take to empty the tank completely?",
      id: 2,
      time:150
    },
    {
      // 37
      question: "Working alone, two pipes A and B require 9 hours and 6.25 hours more respectively to fill a pool than if they were working together. Find the total time taken to fill the pool if both were working together.",
      id: 2,
      time:150
    },
    
   
    {
      // 38
      question: "You have 1,000 bottles of juice. One contains poison and tastes bitter. How do you find the poisoned bottle using the smallest number of sips?",
      id: 2,
      time:150
    },
    {
      question: "thank you",
      id: 2,
      time:260
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
  const [time,settime]=useState(0);
  const [drop,setdrop]=useState(false);
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
    // setj(j+1);
    setj(j+1);
    settime(0);
    // settime(questions[j].time);
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
   displayanswer(false);
   setChecked(initial);
   setsubmittedans(-1);
   setpoints(0);
   setright(false);
   setpoints(0);
   setattemp(0);
   settime(questions[j].time);
   
  }

  const newtime=()=>{
    
    settime(questions[j].time);
  }

  const endgame=()=>{
    
    settime(0);
  }
  return (
    
    <div className='w-full py-32 min-h-screen flex justify-center items-center bg-gradient-to-r from-black to-blue-950 text-white '>
    
      <section className='flex flex-col w-10/12 items-center gap-2 '>
        <p className=' text-8xl font-bold '>Let's Play</p>
      
        <form action='' className='flex flex-col items-center w-full  mt-6 border-2 border-fon py-6 px-10 rounded-3xl' >
          <div className='w-full px-4'>
          <p className='py-6 m-0  text-start text-4xl'>
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
      </section>
      <div className={`w-36 flex justify-center items-center h-36 fixed top-6 right-10 bg-gradient-to-r from-green-500 to-blue-500 mr-10 rounded-full cursor-pointer`} onClick={newtime}>
        <div className={` w-32 h-32 flex justify-center items-center rounded-full bg-blue-200`}>
         <p className='text-6xl font-bold text-black font-sans'>{time}</p>
         </div>
      </div>
      <div className='w-32 cursor-pointer h-8 rounded-xl bg-white fixed top-6 left-10 text-black'onClick={()=>{setdrop(!drop)}}>
       <p className='text-center mt-1 dropdown'> Ques</p> 
      <div className={` h-32 w-32 flex-col bg-white overflow-auto ${drop?'flex':'hidden'}`}>
        {
          questions.map((item,idx)=>{
            return (<div className='text-center cursor-pointer hover:scale-105' key={idx} onClick={()=>{
              setj(idx);
              setdrop(!drop);
              settime(0);
            }}>
              {idx}
            </div>)
          })
        }
      </div>
    </div>
          </div>
  );
      }

export default App;

