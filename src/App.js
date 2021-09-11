import React,{useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';
import useStyles from './styles';
import  NewsCards  from './components/NewsCards/NewsCards';



const alankey="a58726c5c7776fcc04d3076aca7f17162e956eca572e1d8b807a3e2338fdd0dc/stage";


const App=()=> {
  const [newsArticles,setNewsArticles]=useState([]);
  const classes=useStyles();

  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command,articles}) =>{
        if(command ==="newHeadlines"){
         setNewsArticles(articles);
        }
      }
    })
  },[]);
  return (
    <div>
      <h1 style={{paddingLeft:'45%'}}>News Reader</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
