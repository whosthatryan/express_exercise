const express = require('express');
const app = express();

const isAnagrams = (strA, strB) => {
        if ((typeof strA === 'string' && typeof strB === 'string') === true) return fixMyString(strA) === fixMyString(strB) 
        return null
};

function fixMyString(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
};

app.use(express.json());

app.post('/', (req, res) => {
   const { strA, strB } = req.body;
   const answer = isAnagrams(strA, strB);
   res.status(200).send({
       yourAnswerIs: answer
   })
   try {
    const answer = isAnagrams(strA, strB);
    if (answer == null) {
    throw new Error('this error maybe occured because somehow your isanagrams function returned a null or undefined you should refactor your function')
  }
  res.status(200).send({
    yourAnswerIs: answer
  })
   } catch(e) {
        res.status(500).send(e)
        
   }
});

app.listen(process.env.PORT || 3000);