---
layout: single
permalink: /cloud/aws/kms/kms.html
excerpt: ""
header:
  overlay_image: /assets/images/cloud/aws/aws-cover.jpeg
  overlay_filter: 0.5
title: "AWS KMS"
author_profile: true
comments: true
---

## AWS KMS



## 操作示範&說明

1. 創建 AWS Managed Keys
1. 創建 Customer Managed Keys
1. 操作 Rotate KMS Key
1. 物件加密並上傳至 Amazon S3

## 注意事項

1. 不要隨意刪除KMS Key，若需要刪除請先<font color="red">「停用」</font>，並確認是否有傳輸有被此KMS Key加密。
1. 由於刪除 KMS Key 屬於高風險行為，所以 AWS KMS 會強制要求設定等待期為 7 至 30 天。預設等待期間為 30 天。
