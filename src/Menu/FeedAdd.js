import React, { useEffect, useState ,  } from "react";
import {Container, TextField, Button, Typography, Box, Divider } from "@mui/material";
import { useLocation ,useNavigate , useSearchParams   } from 'react-router-dom';

function FeedAdd() {

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const id = queryParams.get("id") || ''; 

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || '';


  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate(); // 페이지 이동을 위한 함수 리턴

  useEffect(()=>{
    let fnList = (id) => {
      fetch('http://localhost:3003/feed/'+ id)
          .then((res)=> res.json())
          .then((data) => {
              console.log(data);
              if (data.message == 'success' ) {
                  //alert(data.result+'님 환영합니다.');
                  //location.href = "../day3/product-list.html";
                  //console.log(data);
                  setUserId(data.list[0].userId);
                  setContent(data.list[0].content);
              } else {
              }
          })
          .catch( err => {
          });
      }

      if (id !== null && id !== '' ) {
        fnList(id);
      }
  },[])






  const handleEdit = () => {
    const editFeed = {
      id: id,
      userId,
      content,
    };

    fetch('http://localhost:3003/feed', {
      method : "PUT",
      headers : {
          "Content-type" : "application/json",
      },
      credentials : "include",
      body : JSON.stringify(editFeed),
  })
      .then((res)=> res.json())
      .then((data) => {
          console.log(data);
          alert("수정 완료");
          navigate("/feedlist"); 
      })
      .catch( err => {
      });


  }


  const handleSubmit = () => {
    if (!userId || !content) return alert("모든 항목을 입력해주세요.");

    const newFeed = {
      id: Date.now(),
      userId,
      content,
      cdatetime: new Date().toISOString(),
    };

    fetch('http://localhost:3003/feed', {
      method : "POST",
      headers : {
          "Content-type" : "application/json",
      },
      credentials : "include",
      body : JSON.stringify(newFeed),
  })
      .then((res)=> res.json())
      .then((data) => {
          //console.log(data);
          alert("등록 완료");
          navigate("/feedlist"); 

      })
      .catch( err => {
      });
  
    
  };
   return (
    <Container maxWidth="sm">
      { id == '' ? 
        <Typography variant="h4" gutterBottom>피드 등록</Typography>

      :
        <Typography variant="h4" gutterBottom>피드 수정</Typography>
      }

      <Divider sx={{ mb: 2 }} />
      <TextField
        label="작성자 ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        disabled={id != ""}
      />
      <TextField
        label="내용"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Box mt={2}>
        { id == '' ?         
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          등록
        </Button> 
        : 
        <Button variant="contained" color="primary" onClick={handleEdit}>
          수정
        </Button>
               }

      </Box>
    </Container>
  )
}

export default FeedAdd