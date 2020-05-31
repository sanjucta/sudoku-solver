function solveRecursive(board)
{
  for (var i=0;i<9;i++)
  {
    for (var j=0;j<9;j++)
    {
      if(board[i][j] === 0)
      {
        let noFits = true;
        for(var num = 1;num<=9 ;num++)
        {
          if(tryVal(board,i,j,num)===true)
          {
            noFits = false;
            board[i][j] = num;
            console.log(`board[${i}][${j}] is ${num}`);
            solveRecursive(board);
            if(isDone(board))
            {
              return;
            }else
            {
              noFits = true;
              console.log(`Reset [${i}][${j}] `);
              console.log(board);
              board[i][j] = 0;
              
            }
                     
          }
        }
        if(noFits) return;
      }
    }
  }

}

function tryVal(board,row,col,num)
{
  if(board[row].includes(num))
  {
    return false;
  } 
  if(getNthColumn(board,col).includes(num))
  {
    return false;
  }
  if(getBlock(board,row,col).includes(num))
  {
    return false;
  }
  return true;
}

function getNthColumn(matrix,n)
{
  return matrix.map((row)=>row[n]);
}

function getBlock(matrix,row,col)
{
  let block = [];
  let rowStart = Math.floor(row/3) * 3;
  let colStart = Math.floor(col/3) * 3;

  for(let i = rowStart; i < rowStart +3 ;i++ )
  {
    
    for(let j = colStart; j < colStart +3 ; j++ )
    {
      block.push(matrix[i][j]);
    }
    
  }

  return block;

}


function isDone(board)
{
  for(let i=0;i<9;i++)
  {
    for(let j=0;j<9;j++)
    {
      if(board[i][j]===0)
        return false;
    }
  }
  return true;
}



function copyObj(obj)
{
  return JSON.parse(JSON.stringify(obj));
}

function solveNonRecursive(board)
{
 
  function putVal(startVal,board,i,j)
  {
        console.log("Starting Putval");
        console.log(board);
        let noFits = true;
        for(var num = startVal;num<=9 ;num++)
        {
          if(tryVal(board,i,j,num)===true)
          {
            noFits = false;
            newBoard = copyObj(board);
            boardStack.push(newBoard);
            valStack.push(num);
            posStack.push({i:i,j:j});
            console.log('Pushing onstack i:'+i+"j:"+j);
            board[i][j] = num;
            
            return true;
            
                                
          }
        }

        if(noFits){
          return false;
        }

 }

  const boardStack = [];
  const valStack = [];
  const posStack = [];

  let i = 0;
  while(i<9)
  {
    let continueOuter = false;
    let j = 0;
    let startVal = 1;
    while(j<9)
    {
      
      let success = false;
      if(board[i][j] === 0)
      {
        console.log(`Trying [${i}][${j}] from ${startVal}`);
        success = putVal(startVal,board,i,j);
        if(!success)
        {
        
          console.log('Popping Board Stack::i::'+i+"::j::"+j);
          console.log(board);
          board = boardStack.pop();
          console.log('board after popping');
          console.log(board);
          startVal = valStack.pop() + 1;
          position = posStack.pop();
          i = position.i;
          j = position.j;
          continueOuter = true;
          continue;
        }
      }
      startVal = 1;
      j++;
    }
    if(continueOuter) continue;
    i++;
  }

  console.log('Board at the end of fill board');
  console.log(board);
  return board;

}

/*setResult is a function that allows you to return the result.Since this this function
calls itself asynchronously you cannot return the result in the usual way*/
function solveAsync(board,setResult)
  {
  var i = 0;
  var j = 0;
  const boardStack = [];
  const valStack = [];
  const posStack = [];

  fill(board,1); 

  function fill(board,startVal)
  {
    console.log('In fill');
    if(isDone(board))
    {
      console.log('We have a solution');
      console.log(board);
      setResult(board);
      return;
    }
    if(i<9)
    {
      if(j<9)
      {
        while(board[i][j]!==0)
        {
          if(j<8)
          {
            j++;
          }else
          {
            if(i<8)
            {
              j=0;
              i++;
   
            }
          } 
        }
      //At this point we have a square whose value is 0;
      //let noFits = false;
    console.log(`Here i,j : [${i},${j}]`);
    let num = startVal;
    console.log(`Here startVal : [${startVal}]`);
    while(( num < 10 ) && (tryVal(board,i,j,num)===false))
    {
      num++;
    }
    console.log(`Here num : [${num}]`);
    if(num === 10)
    {
        //noFits = true;
      console.log(`Reset [${i}][${j}] `);
      console.log(board);
      board = boardStack.pop();
      console.log('Board after popping');
      console.log(board);
      const startVal = valStack.pop()+1;
      const position = posStack.pop();
      i = position.i;
      j = position.j;
      setTimeout(()=>{
        fill(board,startVal)
      },0);
      return;
    }
      
      console.log(`board[${i}][${j}] is ${num}`);
      var boardCopy = copyObj(board);
      boardStack.push(boardCopy);
      valStack.push(num);
      posStack.push({i:i,j:j});
      board[i][j] = num;
      
      setTimeout(()=>{
           fill(board,1);          
        },0);
          
        
      return;
      
    }
  }
}
}


let board = [
  [0,0,7,0,4,2,0,0,0],
  [0,0,2,0,0,0,0,0,5],
  [8,6,0,0,0,0,0,2,0],
  [0,9,0,0,0,7,5,0,0],
  [4,0,0,0,2,9,0,0,8],
  [0,0,3,6,0,0,0,9,2],
  [0,8,0,2,0,0,0,6,1],
  [6,0,0,0,0,5,9,0,0],
  [0,0,0,0,8,0,2,0,0]

]

//solveRecursive(board);
//board = solveNonRecursive(board);

solveAsync(board,(solution)=>{board=solution});

if(isDone(board))
{
  console.log('We have a solution');
  
}

console.log(board);