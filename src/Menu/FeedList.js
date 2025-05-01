

import React, { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, Divider , Button , Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

function FeedList() {
  const [isAll, setAll] = useState(true);

  const navigate = useNavigate(); // 페이지 이동을 위한 함수 리턴

  const [feeds, setFeeds] = useState([
    {
      id: 1,
      userId: "hong123",
      content: "오늘은 날씨가 참 좋네요!",
      cdatetime: "2025-04-29T09:30:00",
    },
    {
      id: 2,
      userId: "kim456",
      content: "React 연습 중입니다 ",
      cdatetime: "2025-04-29T10:00:00",
    },
  ]);

  let token;
  let dToken;


  let fnList = (userId) => {
    
    let url;

    if (userId != '' ) {
      url = "http://localhost:3003/feed?userId="+ userId
    } else {
      url = "http://localhost:3003/feed";
    }

    fetch(url)
        .then((res)=> res.json())
        .then(data => {
            console.log(data);
            if (data.message == 'success' ) {
                //alert(data.result+'님 환영합니다.');
                //location.href = "../day3/product-list.html";
                //console.log(data);
                setFeeds(data.list);
            } else {
            }
        })
        .catch( err => {
        });
    }
    
    token = localStorage.getItem("token") ; // 로컬 스토리지에서 토큰 꺼내기
    dToken = jwtDecode(token) // 디코딩

   useEffect (()=>{

    if (isAll) {
      fnList('');
    } else {
      fnList(dToken.userId);
    }
   }
   ,[isAll])
    

   let fnDelete = (id) => {

    if(!(window.confirm("정말 삭제하시겠습니까?"))){
        return;
    }

    fetch('http://localhost:3003/feed', {
        method : "DELETE",
        headers : {
            "Content-type" : "application/json",
        },
        credentials : "include",
        body : JSON.stringify({id : id}),
    })
        .then((res)=> res.json())
        .then((data) => {
            console.log(data);

            if(!data.isLogin && data.isLogin ){
              alert("인증 세션 만료 다시 로그인 후 시도해 주세요.");
              return;
            }

            if (isAll) {
              fnList('');
            } else {
              fnList(dToken.userId);
            }
        })
        .catch( err => {
        });
    }

   return (
    
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>피드 목록</Typography>
      <Button onClick={()=>{
        setAll(!isAll);

        if (isAll) {
          fnList('');
        } else {
          fnList(dToken.userId);
        }
      }}> { isAll ? "내 피드만" : "전체보기" }</Button>

      <Button onClick={()=>{
        navigate("/feedadd");
      }}>피드 등록</Button>
      <Divider sx={{ mb: 2 }} />
      {feeds.map(feed => (
        <Card key={feed.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{feed.userId}</Typography>
            <Typography variant="body1">{feed.content}
            { feed.images ? feed.images.map((item) => {
               return <img key={item.imgNo} width={150} height={150}  src={'http://localhost:3003/' + item.imgPath}></img>
            }) : null }
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {new Date(feed.cdatetime).toLocaleString()}
            </Typography>

            { feed.userId == dToken.userId ?
            <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={()=>{
                navigate("/feedadd?id="+feed.id);
            }}>수정</Button>
            <Button variant="outlined" onClick={()=>{fnDelete(feed.id)}}>삭제</Button>
            </Stack> : null
            }
          </CardContent>
        </Card>
      ))}


    </Container>
  )
}

export default FeedList