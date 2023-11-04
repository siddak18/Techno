import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import './tailwind.css';

// Define a functional component
function X() {
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
    <div>
      <h1>Hello, React!</h1>
      <p>This is a functional component.</p>
    </div>
  );
}

export default X;