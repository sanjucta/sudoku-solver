/**
 * Solve a Sudoku puzzle
 * @param  {Number[][]} board A 2 dimensional array representing the Sudoku puzzle
 * @param  {Function} setResult A function to return the result. This being a function that calls itself asynchronously we cannot simply return the result.
 * 
 */
export function solve(board,setResult)
  {
  /* Starting from the first available free position, we try to insert values between 1 and 9 systematically 
     in each position. If we fail to insert a suitable value in any position, we backtrack to the previous cell 
     filled and try to fill it with the next viable value.  
  */
  var i = 0;
  var j = 0;
  const boardStack = [];                 
  const valStack = []; 
  const posStack = [];   

  fill(board,1); 

  function fill(board,startVal)
  {
  
    if(isDone(board))
    {
      //console.log('We have a solution');
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
    //At this point we have a square where we need to insert a value;
    //console.log(`Here i,j : [${i},${j}]`);
    let num = startVal;
    //console.log(`Here startVal : [${startVal}]`);
    while(( num < 10 ) && (tryVal(board,i,j,num)===false))
    {
      num++;
    }
    //console.log(`Here num : [${num}]`);
    if(num === 10)
    {
      // This means we are unable to find any viable number to insert into this position which means 
      // values inserted in previous positions must be incorrect. So we backtrack to the previous sqaure filled
      // and try with the next viable value at that position 
      console.log(`Reset [${i}][${j}] `);
      //console.log(board);
      board = boardStack.pop();
      //console.log('Board after popping');
      //console.log(board);
      const startVal = valStack.pop()+1;
      const position = posStack.pop();
      i = position.i;
      j = position.j;
      // We use setTimeout because this is a long operation and we need to allow the call stack to be empty so that the browser can respond to events
      setTimeout(()=>{
        fill(board,startVal)
      },0);
      return;
    }
      
      //console.log(`board[${i}][${j}] is ${num}`);
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

/**
 * Check if num can be inserted into the board at position [row,col]
 * @param  {Number} board A 2 dimensional array representing the Sudoku puzzle
 * @param  {Number} row 
 * @param  {Number} col
 * @param  {Number} num The number we are trying to insert
 */
export function tryVal(board,row,col,num)
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

