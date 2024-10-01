<?php
    function encryptUserId($user_id){
        return base64_encode($user_id);
    }
    function decryptUserId($user_id){
        return base64_decode($user_id);
    }
?>