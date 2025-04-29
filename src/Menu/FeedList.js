

import React, { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, Divider , Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';


function FeedList() {

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



  let fnList =  () => {
    fetch('http://localhost:3003/feed')
        .then((res)=> res.json())
        .then((data) => {
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
    

   useEffect (()=>{


        fnList();
   }
   ,[])
    

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
            alert("삭제 완료!");
            fnList();
        })
        .catch( err => {
        });
    }

   return (
    
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>피드 목록</Typography>
      <Divider sx={{ mb: 2 }} />
      {feeds.map(feed => (
        <Card key={feed.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{feed.userId}</Typography>
            <Typography variant="body1">{feed.content}</Typography>
            <Typography variant="caption" color="text.secondary">
              {new Date(feed.cdatetime).toLocaleString()}
            </Typography>

            <Button variant="outlined" onClick={()=>{
                navigate("/feedadd?id="+feed.id);
            }}>수정</Button>
            <Button variant="outlined" onClick={()=>{fnDelete(feed.id)}}>삭제</Button>
          </CardContent>
        </Card>
      ))}
      <button onClick={()=>{
        navigate("/feedadd");
      }}>피드 등록</button>

    </Container>
  )
}

export default FeedList