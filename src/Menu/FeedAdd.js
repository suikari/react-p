import React, { useEffect, useState   } from "react";
import {Container, TextField, Button, Typography, Box, Divider , IconButton ,ImageList ,ImageListItem ,ImageListItemBar ,ListSubheader } from "@mui/material";
import { useLocation ,useNavigate , useSearchParams   } from 'react-router-dom';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';

/**
 * 이미지 첨부 및 미리보기를 제공하는 컴포넌트
 * - 이미지 파일 선택 및 업로드
 * - 선택된 이미지 미리보기 표시
 * - 개별 이미지 삭제 기능
 */
const ImageAttachButton = ({ onFilesChange }) => {
  // 첨부된 파일들의 정보를 저장하는 상태


  const [attachedFiles, setAttachedFiles] = useState([]);

  /**
   * 파일 선택 시 실행되는 이벤트 핸들러
   * @param {Event} event - 파일 입력 이벤트 객체
   */
  const handleFileChange = (event) => {
    // // FileList 객체를 배열로 변환
    // const files = Array.from(event.target.files);

    // // 각 파일에 대한 정보 객체 생성
    // const newFiles = files.map((file) => ({
    //   name: file.name,                                    // 파일명
    //   size: (file.size / 1024).toFixed(2) + 'KB',        // 파일 크기 (KB)
    //   preview: URL.createObjectURL(file),                 // 미리보기 URL
    //   file: file,                                        // 원본 파일 객체
    // }));

    // // 기존 파일 목록에 새로운 파일들을 추가
    // setAttachedFiles((prevFiles) => [...prevFiles, ...newFiles]);

    const files = Array.from(event.target.files);

    const newFiles = files.map((file) => ({
      name: file.name,
      size: (file.size / 1024).toFixed(2) + 'KB',
      preview: URL.createObjectURL(file),
      file: file,
    }));

    const updatedFiles = [...attachedFiles, ...newFiles];
    setAttachedFiles(updatedFiles);
    
    if (onFilesChange) {
      onFilesChange(updatedFiles); // 외부로 전달!
    }
  };

  /**
   * 파일 삭제 시 실행되는 이벤트 핸들러
   * @param {string} fileName - 삭제할 파일의 이름
   */
  const handleFileDelete = (fileName) => {
    // 지정된 파일명과 일치하지 않는 파일들만 남김
    const filtered = attachedFiles.filter((file) => file.name !== fileName);

    setAttachedFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));

    if (onFilesChange) {
      onFilesChange(filtered); // 변경된 리스트 전달
    }

  };

  return (
    // 컴포넌트의 최상위 컨테이너
    <Box sx={{ width: '100%', maxWidth: 350 }}>
      {/* 파일 업로드 버튼 영역 */}
      <Box sx={{ padding: 1 }}>
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} fullWidth>
          이미지 첨부
          <input
            type="file"
            hidden
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
        </Button>
      </Box>

      {/* 이미지 미리보기 목록 */}
      <ImageList sx={{ padding: 1, margin: 0 }}>
        {attachedFiles.map((file, index) => (
          <ImageListItem key={`image_attach_button_list_${index}`}>
            {/* 이미지 미리보기 */}
            <img
              src={file.preview}
              alt={file.name}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {/* 이미지 정보 및 삭제 버튼 바 */}
            <ImageListItemBar
              title={file.name}
              subtitle={file.size}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${file.name}`}
                  onClick={() => handleFileDelete(file.name)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

// App 컴포넌트에서 세로 스크롤과 함께 사용
function App() {
  return (
    <div style={{
      height: '100vh',     // 전체 화면 높이
      overflowY: 'auto',   // 세로 스크롤
    }}>
      <ImageAttachButton />
    </div>
  );
}




function FeedAdd() {

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const id = queryParams.get("id") || ''; 
  const [images, setImages] = useState([]);

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
          console.log(data);
          //alert("등록 완료");
          let feedId = data.result[0].insertId;

          if (images.length === 0) {
            navigate("/feedlist");
          }
        
          const formData = new FormData();
        
          // 파일들을 FormData에 추가
          images.forEach((fileObj, index) => {
            formData.append('images', fileObj.file);  // input name: 'images'
          });
          formData.append("feedId", feedId);

          try {
            fetch('http://localhost:3003/feed/upload', {
              method: 'POST',
              body: formData,
            })
            .then((res)=> res.json())
            .then((data) => {

              if (data) {
                alert("업로드 성공! " );
                navigate("/feedlist");
              } else {
                alert("업로드 실패: ");
              }
            });
          } catch (error) {
            console.error("업로드 중 에러:", error);
            alert("에러 발생");
          }


          
           

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
       <ImageAttachButton  onFilesChange={setImages}/>
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