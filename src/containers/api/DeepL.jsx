const API_KEY = 'd202e23b-ea29-4e56-8700-1902d3c74465:fx' ;
const API_URL = 'https://api-free.deepl.com/v2/translate';

import axios from "axios" ;

function deeplTranslate(inputText) {
    let deeplInput=inputText;
    let isJapanese=false;
    let sourceLang='';

    for(var i=0; i < deeplInput.length; i++){//言語判別
        if(deeplInput.charCodeAt(i) >= 256) {
        isJapanese = true;
        break;
        }
    }

    switch (isJapanese){
        case true:
         sourceLang='&source_lang=JA&target_lang=EN';
        break;
        case false:
         sourceLang='&source_lang=EN&target_lang=JA';
        break;
        default:
         alert("言語の判別に失敗しました");
    }

  let content = encodeURI('auth_key=' + API_KEY + '&text=' + deeplInput + sourceLang);
  let url = API_URL + '?' + content;

  return axios.get(url)
    .then((res) => {
        // console.log(res)
        return res.data
    });

};

export default deeplTranslate;