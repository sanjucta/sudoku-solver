import React, { Component } from 'react';
import EditableSquare from '../editable-square/editable-square.component';
import './puzzle.styles.css';
import {solve,tryVal} from  '../../services/solution-service';
import cloneDeep from 'lodash/cloneDeep';


class Puzzle extends Component
{
    constructor()
    {
        super();
        this.state = {
            board : [
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0]
            ] ,

            msg : 'Any number can only appear once in any row, column or grid',
            entryErr : false,
            working : false,
            solved : false
        }
    }
 
    reset()
    {
        const newBoard = [...this.state.board];//shallow copy
        
        newBoard.forEach(row => {
            row.fill(0);
        });
        this.setState({board:newBoard,solved:false}) // forcing refresh
    }

    solvePuzzle()
    {
        this.setState(
            {working:true,
            solved:false});
        solve(this.state.board,(solution)=>{
            this.setState({
                board:solution,
                solved:true,
                working:false})
        });
        
    }

    updateValue = (row,col,value) =>{

        const boardCopy = cloneDeep(this.state.board);
        const val = parseInt(value);
                  
        if((val===0)||tryVal(boardCopy,row,col,val))
        {
            
            this.setState((prevState)=>{
              const newBoard = [...prevState.board];
              newBoard[row][col] = val;
              return{
                 board : newBoard,
                 entryErr : false
             }
           });
        }else{
            this.setState({entryErr:true});
        }
        
    }

    render()
    {
        return( 
            <div>
            <div className={this.state.working?"working":null} >
                <div className={this.state.solved?"grid solved":"grid"} >
                  {
                    this.state.board.map((row,rowind)=>{

                        return (
                            <div key ={`${rowind}`} className="wrapper">
                            {row.map((val,colind)=>{
                                    return <EditableSquare key ={`${rowind}-${colind}`} value={val}
                                     updateValue={this.updateValue.bind(this,rowind,colind)}
                                     
                                     />
                                }) }
                            </div>    
                        )               
                                                        
                    })
                  }
                </div>
                <div className="action-buttons">
                    <button onClick={()=>this.solvePuzzle()}>Solve</button>
                    <button onClick={()=>this.reset()}>Reset</button>
                </div>
                <div className="error">
                    {this.state.entryErr?this.state.msg:''}
                </div>
                
            </div>
            {
                this.state.working ? <div id="loader"></div> : null
            }
            </div>         
        )
    }

    
}

export default Puzzle;