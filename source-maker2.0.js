/**2차배포절대금지
2차배포 목격시 신고바람
수정금지(허용해준사람외)[special thanks명단]
봇폴더는 sdcard/Bots으로 설정되어있습니다(그렇게 해두세요 아니면 골치아파요)
봇키지 마세요, 디버그룸에서 실행하세요
카링소스 사용시, 넷환경에서 작업해주세요.
넷안되는데 안된다고 찡찡대지 마시고요.
카링노가다하기 귀찮아서 그런건 안비밀
제목은 꼭 소스메이커로 해주세요*/
FS=FileStream;//FileStream
lpath="sdcard/*README.txt";//건드리지마세요
botpath="sdcard/Bots";//봇저장경로
paast="sdcard/Bots/소스메이커/bot.json";
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName){
  b=FS.read(paast);
  if(b==undefined){
    botpath="sdcard/Bots";
  }
  if(msg.startsWith("!소스태그:")){
      sc=msg.split(":");//:건너뛰기
      if(sc[2]=="[시계]"/**sc[2]즉, :를 2번건너뛴게 시계라면*/){
        java.io.File(botpath, "시계").mkdir();//경로만들기, 즉 폴더만들기*/
        clockpath="sdcard/Bots/시계/";//패스생성
        java.io.File(clockpath, "modules").mkdir();//경로만들기
        java.io.File(clockpath, "DebugRoom").mkdir();//경로만들기
        pewa="sdcard/Bots/시계/bot.json";//패스생성
        FS.write(pewa, "{\n    \"main\": \"시계.js\",\n    \"option\": {\n        \"apiLevel\": 1,\n        \"useUnifiedParams\": false,\n        \"useBabel\": false\n    }\n}");//bot.json작성
        paath="sdcard/Bots/시계/시계.js";//패스생성
        replier.reply("성공");//성공만 반환.....
        FS.write(paath, "function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+sc[1]+"\"){\nday=new Date();\nvar b=day.getHours();\nvar a=day.getMinutes();\nreplier.reply(b+\"시\"+a+\"분\");\n}\n} ");//js파일작성
        }else if(sc[2]=="[보낸사람]"/**이건보낸사람이라면*/){
          java.io.File(botpath, "보낸사람").mkdir();//여기부터주석생략
          senderpath="sdcard/Bots/보낸사람";
          java.io.File(senderpath, "modules").mkdir();
          java.io.File(senderpath, "DebugRoom").mkdir();
          senderjson="sdcard/Bots/보낸사람/bot.json";
          FS.write(senderjson, "{\n    \"main\": \"보낸사람.js\",\n    \"option\": {\n        \"apiLevel\": 1,\n        \"useUnifiedParams\": false,\n        \"useBabel\": false\n    }\n}");
          peath="sdcard/Bots/보낸사람/보낸사람.js";
          replier.reply("성공");
          FS.write(peath, "function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+sc[1]+"\"){\nreplier.reply(sender);\n}\n} ");
        }else if(sc[2]=="[방]"){
          java.io.File(botpath, "방").mkdir();
          roompath="sdcard/Bots/방";
          java.io.File(roompath, "modules").mkdir();
          java.io.File(roompath, "DebugRoom").mkdir();
          pq="sdcard/Bots/방/방.js";
          roomjson="sdcard/Bots/방/bot.json";
          FS.write(roomjson, "{\n    \"main\": \"방.js\",\n    \"option\": {\n        \"apiLevel\": 1,\n        \"useUnifiedParams\": false,\n        \"useBabel\": false\n    }\n}");
          replier.reply("성공");
          FS.write(pq, "function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+sc[1]+"\"){\nreplier.reply(room);\n}\n} ");
        }else if(sc[2]=="[월]"/**이건월이라면*/){
          java.io.File(botpath, "월").mkdir();
          monthpath="sdcard/Bots/월";
          java.io.File(monthpath, "modules").mkdir();
          java.io.File(monthpath, "DebugRoom").mkdir();
          ak="sdcard/Bots/월/월.js";
          monthjson="sdcard/Bots/월/bot.json";
          FS.write(monthjson, "{\n    \"main\": \"월.js\",\n    \"option\": {\n        \"apiLevel\": 1,\n        \"useUnifiedParams\": false,\n        \"useBabel\": false\n    }\n}");
          replier.reply("성공");
          FS.write(ak, "Fay=new Date();\nvar b=Fay.getMonth();\nvar c=b+1;\nfunction response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+sc[1]+"\"){\nreplier.reply(c);\n}\n} ");
        }else if(sc[2].startsWith("[토스트] ")/**이건토스트로 시작된다면*/){
          d=sc[2].substring(6);
          java.io.File(botpath, "토스트").mkdir();
          toastpath="sdcard/Bots/토스트";
          java.io.File(toastpath, "DebugRoom").mkdir();
          java.io.File(toastpath, "modules").mkdir();
          toastjson="sdcard/Bots/토스트/bot.json";
          FS.write(toastjson, "{\n    \"main\": \토스트.js\",\n    \"option\": {\n        \"apiLevel\": 1,\n        \"useUnifiedParams\": false,\n        \"useBabel\": false\n    }\n}");
          dee="sdcard/Bots/토스트/토스트.js";
          replier.reply("성공");
          FS.write(dee, "function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+sc[1]+"\"){\nApi.showToast(\""+d+"\");\n}\n} ");
        }
        }else if (msg.startsWith("!소스:")/**단자응*/){
          as=msg.split(":");
          java.io.File(botpath, "자동응답").mkdir();
          replierpath="sdcard/Bots/자동응답";
          java.io.File(replierpath, "modules").mkdir();
          java.io.File(replierpath, "DebugRoom").mkdir();
          replierjson="sdcard/Bots/자동응답/bot.json";
          FS.write(replierjson, "{\n    \"main\": \"자동응답.js\",\n    \"option\": {\n        \"apiLevel\": 1,\n        \"useUnifiedParams\": false,\n        \"useBabel\": false\n    }\n}");
          pat="sdcard/Bots/자동응답/자동응답.js";
      replier.reply("성공");
      FS.write(pat, "function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+as[1]+"\"){\nreplier.reply(\""+as[2]+"\");\n}\n} ");
      }else if(msg.startsWith("!소스미니게임:")/**미니게임류*/){  
        ds=msg.split(":");
        if(ds[2]=="업다운"/**업다운*/){
          java.io.File(botpath, "업다운").mkdir();
          updownpath="sdcard/Bots/업다운";
          java.io.File(updownpath, "modules").mkdir();
          java.io.File(updownpath, "DebugRoom").mkdir();
          updownjson="sdcard/Bots/bot.json";
          FS.write(updownjson, "{\n    \"main\": \"업다운.js\",\n    \"option\": {\n        \"apiLevel\": 1,\n        \"useUnifiedParams\": false,\n        \"useBabel\": false\n    }\n}");
          u="sdcard/Bots/업다운/업다운.js";
          replier.reply("성공");
           FS.write(u, "player=[];\nstart=false;\nchance=20;\nnum=Math.floor(Math.random()*100+1);\nfunction response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+ds[1]+"\"){\nreplier.reply(sender+\"님, 업다운이 시작되었습니다.(1/1)\");\nplayer.push(sender);\nif(player.indexOf(sender)!=-1&&msg>num){\nreplier.reply(\"down!\n남은 기회:\"+chance+\"번\");\nchance--;\n}else if(player.indexOf(sender)!=-1&&msg<num){\nreplier.reply(\"up!\n남은 기회:\"+chance+\"번\");\nchance--;}else if(player.indexOf(sender)!=-1&&msg==num){\nreplier.reply(\"정답!\");\nplayer.pop(sender);\nchance=20;\n}else if(player.indexOf(sender)!=-1&&msg==\"!포기\"){\nreplier.reply(\"포기하였습니다.\n정답은\"+num+\"이었습니다.\");\nplayer.pop(sender);\nchance=20;\n}\n}\nif(chance==0){\nreplier.reply(\"탈락!\");\nplayer.pop(sender);\n}\n}");
        }else if(ds[2]=="가위바위보"/**가위바위보*/){
          java.io.File(botpath, "가위바위보").mkdir();
          peeeth="sdcard/Bots/가위바위보/가위바위보.js";
          gamepath="sdcard/Bots/가위바위보";
          java.io.File(gamepath, "modules").mkdir();
          java.io.File(gamepath, "DebugRoom").mkdir();
          replier.reply("성공");
          gamejson="sdcard/Bots/가위바위보/bot.json";
          FS.write(gamejson, "{\n    \"main\": \"가위바위보.js\",\n    \"option\": {\n        \"apiLevel\": 1,\n        \"useUnifiedParams\": false,\n        \"useBabel\": false\n    }\n}");
          FS.write(peeethth, "num=Math.floor(Math.random()*3+1);\nfunction response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {\nif(msg==\""+ds[1]+"\"){\nif(num==1){\nreplier.reply(가위!);\n}if(num==2){\nreplier.reply( 바위!);\n}if(num==3){\nreplier.reply(보!);\n}\n}\n}");
        }
      }
  if(msg=="!소스메이커 도움말"){
    replier.reply("--------------------------------------------\n소스메이커 도움말\n--------------------------------------------\n소스메이커 V2.0\n--------------------------------------------가능한것:인사봇,태그(단순)\n--------------------------------------------형식:!소스태그:(말한다면에 들어갈부분):(태그)\n!패치노트로 패치노트확인가능\n태그는 [시계],[보낸사람]<==이것외에도  많음(!태그), 태그를 쓰지않을시\n!소스:으로 시작\n미니게임일시 !소스미니게임:~~:~~\nspecial thanks:zz");
    FS.write(lpath, "이 소스메이커의 주인은 활동명 마동석입니다.");
    }
  if(msg=="!패치노트"){
    replier.reply("패치노트입니다.\n?월??일 개발시작\n6월19일 태그제작\n6월20일 태그제작오류:토스트,알림창\n6월21일 토스트개발,미니게임 업다운추가\n6월 27일 FileStream이용하여 js도 출력(경로-sdcard(내장메모리))\n6월28일쯤-봇을 만들어줌\n6월29일-파싱소스문제발생, 제거, 주석만듦");
    }
    if(msg=="!태그"){
      replier.reply("대부분 닼토님의 초록봇에서 영감을 얻어 제작되었습니다.\n[시계]<==시간을 알려줍니다.\n[보낸사람]<==보낸사람을 말합니다.\n[방]<==방을 말합니다.\n[월]<==월을 말합니다.");
    }
    }
    /**
    made by
    신봉선==마동석
    */
