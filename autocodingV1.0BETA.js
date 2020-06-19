Fay=new Date();
var b=Fay.getHours();
var a=Fay.getMinutes();
tagslists=["[시계]"];
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName){
  if(msg.startsWith("!소스:")){
      sc=msg.split(":");
      if(msg.indexOf(tagslists)){
      if(sc[2]=="[시계]"){
        replier.reply("Fay=new Date();\nvar b=Fay.getHours();\nvar a=Fay.getMinutes();\nfunction response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+sc[1]+"\"){\nreplier.reply(b+\"시\"+a+\"분\");\n}\n} ");
        }
        } else if (sc[1]!==tagslists){
      replier.reply("function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+sc[1]+"\"){\nreplier.reply(\""+sc[2]+"\");\n}\n} ");
      }
      }
  if(msg=="!소스메이커 도움말"){
    replier.reply("--------------------------------------------\n소스메이커 도움말\n--------------------------------------------\n소스메이커 V:0.1Beta\n--------------------------------------------가능한것:인사봇,시계\n--------------------------------------------형식:!소스 (말한다면에 들어갈부분):(말하기에 들어갈 부분)\n!패치노트로 패치노트확인가능");
    }
  if(msg=="!패치노트"){
    replier.reply("패치노트입니다.\n?월??일 개발시작\n6월19일 태그제작");
    }
    }
