function response(room, msg, sender, isGroupChat, replier, imageDB, packageName){
  if(msg.startsWith("!소스:")){
      sc=msg.split(":");
      if(sc[2]=="[시계]"){
        replier.reply("Fay=new Date();\nvar b=Fay.getHours();\nvar a=Fay.getMinutes();\nfunction response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+sc[1]+"\"){\nreplier.reply(b+\"시\"+a+\"분\");\n}\n} ");
        }else if(sc[2]=="[보낸사람]"){
          replier.reply("function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+sc[1]+"\"){\nreplier.reply(sender);\n}\n} ");
        }else if(sc[2]=="[방]"){
          replier.reply("function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+sc[1]+"\"){\nreplier.reply(room);\n}\n} ");
        }else if(sc[2]=="[월]"){
          replier.reply("Fay=new Date();\nvar b=Fay.getMonth();\nvar c=b+1;\nfunction response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+sc[1]+"\"){\nreplier.reply(c);\n}\n} ");
        }else if(sc[2].startsWith("[토스트] ")){
          d=sc[2].substring(6);
          replier.reply("function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+sc[1]+"\"){\nApi.showToast(\""+d+"\");\n}\n} ");
        }
      } else if (msg.startsWith("!소스일반:")){
          as=msg.split(":");
      replier.reply("function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+as[1]+"\"){\nreplier.reply(\""+as[2]+"\");\n}\n} ");
      }else if(msg.startsWith("!소스미니게임:")){
        ds=msg.split(":");
        if(ds[2]=="업다운"){
          replier.reply("player=[];\nstart=false;\nchance=20;\nnum=Math.floor(Math.random()*100+1);\nfunction response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\"!업다운시작\"){\nreplier.reply(sender+\"님, 업다운이 시작되었습니다.(1/1)\");\nplayer.push(sender);\nif(player.indexOf(sender)!=-1&&msg>num){\nreplier.reply(\"down!\n남은 기회:\"+chance+\"번\");\nchance--;\n}else if(player.indexOf(sender)!=-1&&msg<num){\nreplier.reply(\"up!\n남은 기회:\"+chance+\"번\");\nchance--;}else if(player.indexOf(sender)!=-1&&msg==num){\nreplier.reply(\"정답!\");\nplayer.pop(sender);\nchance=20;\n}else if(player.indexOf(sender)!=-1&&msg==\"!포기\"){\nreplier.reply(\"포기하였습니다.\n정답은\"+num+\"이었습니다.\");\nplayer.pop(sender);\nchance=20;\n}\n}\nif(chance==0){\nreplier.reply(\"탈락!\");\nplayer.pop(sender);\n}\n}");
        }
      }
  if(msg=="!소스메이커 도움말"){
    replier.reply("--------------------------------------------\n소스메이커 도움말\n--------------------------------------------\n소스메이커 V:0.2\n--------------------------------------------가능한것:인사봇,태그(단순)\n--------------------------------------------형식:!소스 (말한다면에 들어갈부분):(말하기에 들어갈 부분)\n!패치노트로 패치노트확인가능\n태그는 [시계],[보낸사람]<==이것들뿐, 태그를 쓰지않을시\n!소스일반:으로 시작\n미니게임일시 !소스미니게임:~~:~~");
    }
  if(msg=="!패치노트"){
    replier.reply("패치노트입니다.\n?월??일 개발시작\n6월19일 태그제작\n6월20일 태그제작오류:토스트,알림창\n6월21일 토스트개발,미니게임 업다운추가");
    }
    if(msg=="!태그"){
      replier.reply("대부분 닼토님의 초록봇에서 영감을 얻어 제작되었습니다.\n[시계]<==시간을 알려줍니다.\n[보낸사람]<==보낸사람을 말합니다.\n[방]<==방을 말합니다.\n[월]<==월을 말합니다.");
    }
    }
