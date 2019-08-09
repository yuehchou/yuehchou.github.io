---
layout: single
permalink: /projects/NYMU/disorder.html
excerpt: "This project is cooperate with National Yang-Ming University from Feb. 2018 to Jun. 2018."
header:
  overlay_image: /images/projects/NYMU/NYMU.jpg
  overlay_filter: 0.5
title: "Disorder (Mental)"
author_profile: true
comments: true
---

<br>

## Introduction

Disorder is often called the hidden disability because our behavior and thinking may have very serious problems, and yet disorder patients always have no obvious physical changes. That's the reason why this hidden disability is easily ignored and misunderstood.<br>

Also, disorder is not an intellectual disability. Intelligence is usually not affected, although there are often cognitive changes, such as memory, attention, and attention. Here we give the precise definition of disorder, <b>a disruption of the disease to the normal or regular functions in the body or a part of the body</b>.<br>

Moreover, disorders can be classified into the following areas:<br>
   * Mental
   * Physical
   * Genetic
   * Emotional
   * Behavioural
   * Structural<br>

Following, we will focus on <b>mental disorder</b>.<br>

A <b>mental disorder</b> is usually called a <b>mental illness</b> or a <b>psychiatric disorder</b>. Different with the normal disease, mental disorder is a behavioral or mental pattern that causes significant distress or impairment of personal functioning. Such features may be persistent, relapsing and remitting, or occur as a single episode. This disorder disease may be diagnosed by a mental health professional.<br>

## How to diagnose the mental disorders?

Thorough mental examination, physical and neurological examination, laboratory examination, brain imaging examination and neuropsychological assessment, the psychiatrist can only make a preliminary judgment on the patient's current mental state, and then the psychiatrist need to combine the complete medical history data, such as the personal life history and the related social and psychological factors, so that they  can finally make the current diagnosis by analysing and summarizing the above informations.<br>

## Goal

To assist the psychiatrist in diagnosing and simplify the consultation process, we try to classify the mental disorder patients by analysing the MR brain images.<br>

## Data

<b>Brain MR "T1" Images</b>
* Source: Dr. Albert C Yang and Jean Lee<br>
* Cases Number:
    1. Total: 400
    2. Healthy: 200
    3. Schizophrenia: 200
* Type: NIFTI file<br>
* Spacing: 1 mm $$\times$$ 1 mm $$\times$$ 1 mm<br>
* Size: 3D but not fiexd (I will cut into the smallest size of those images)<br>
* Dataset:
    1. Training Set: 280 (70%)
    2. Validation Set: 40 (10%)
    3. Testing Set: 80 (20%)

## Devices
  1. CPU: Intel(R) Core(TM) i9-7900X CPU @ 3.30GHz $$\times$$ 20 Cores
  2. GPU: GeForce RTX 2080 $$\times$$ 4 Cores

## Methods

* <big><b>Method 1 (Use CNN model):</b></big><br>
    1. Cut all MR images to the same size since input layer only accepts the same size
    2. Train the CNN model and predict
    3. Tesorflow (v.1.13.1) Model Graph (display by Tensorboard):<br>

<div style="text-align:center"><img src="/images/projects/NYMU/model.png" width="150%" height="150%"/></div><br>


* <big><b>Method 2 (Use Radiomics):</b></big><br>
    1. Construct brain mask:<br>
       nipy.labs.mask.compute_mask_files $$\rightarrow$$ scipy.ndimage.morphology.binary_fill_holes
    2. Compute Radiomics features (v2.1.0)
    3. Compute ICC to extract useful Radiomics features
    4. Design classification model<br><br>

* <big><b>Method 3 (Use CNN model with segmentation MR images):</b></big><br>
    1. Segment the white matter (MW) from MR brain images
    2. Normalize to 0 ~ 1024.
    3. Reduce one convolution since segmentation images are smaller than original size
    4. Train the CNN model and then predict<br><br>

## Results

* <big><b>Method 1 (Use CNN model):</b></big>
  <br>1. Lerning Rate: $$1\times10^{-5}$$, Batch Size: 10, Epoch: 100<br>
  &ensp; Training Results Figure:<br>
  &emsp; a. Accuracy:<br>

<div style="text-align:center"><img src="/images/projects/NYMU/acc_r_000001.png" width="60%" height="60%"/></div>

   <br>&emsp; &emsp; &ensp; b. Loss:<br>
<div style="text-align:center"><img src="/images/projects/NYMU/loss_r_000001.png" width="60%" height="60%"/></div>

   <br>&emsp; &emsp; &emsp; Testing Accuracy: 0.625<br>
    &emsp; &emsp; &emsp; Confusion Matrix:<br>
   <table>
        <tr>
            <th rowspan="2">Actual</th>
            <th colspan="2">Predict</th>
        </tr>
        <tr>
            <td>Negative</td>
            <td>Positive</td>
        </tr>
        <tr>
            <td>Negative</td>
            <td>33</td>
            <td>10</td>
        </tr>
        <tr>
            <td>Positive</td>
            <td>20</td>
            <td>17</td>
        </tr>
    </table>

   <br>&emsp; 2. Lerning Rate: $$1\times10^{-4}$$, Batch Size: 10, Epoch: 100<br>
   &emsp; &emsp; Training Results Figure:<br>
   &emsp; &emsp; &ensp; a. Accuracy:<br>
<div style="text-align:center"><img src="/images/projects/NYMU/acc_r_00001.png" width="60%" height="60%"/></div>

   <br>&emsp; &emsp; &ensp; b. Loss:<br>
<div style="text-align:center"><img src="/images/projects/NYMU/loss_r_00001.png" width="60%" height="60%"/></div>

   <br>&emsp; &emsp; &emsp; Testing Accuracy: 0.6625<br>
   &emsp; &emsp; &emsp; Confusion Matrix:<br>

  <table>
        <tr>
            <th rowspan="2">Actual</th>
            <th colspan="2">Predict</th>
        </tr>
        <tr>
            <td>Negative</td>
            <td>Positive</td>
        </tr>
        <tr>
            <td>Negative</td>
            <td>33</td>
            <td>10</td>
        </tr>
        <tr>
            <td>Positive</td>
            <td>17</td>
            <td>20</td>
        </tr>
    </table><br>



* <big><b>Method 2 (Use Radiomics):</b></big>
  <br>1. Construct brain mask:<br>
  &ensp; a. Original brain images:<br>

<div style="text-align:center"><img src="/images/projects/NYMU/brain.png" width="60%" height="60%"/></div><br>

  &emsp; &emsp; &ensp; b. Generate brain mask:<br>
<div style="text-align:center"><img src="/images/projects/NYMU/brain_mask.png" width="60%" height="60%"/></div><br>

  &emsp; &emsp; &ensp; c. Fill the holes:<br>
<div style="text-align:center"><img src="/images/projects/NYMU/full_mask.png" width="60%" height="60%"/></div><br><br>

  &emsp; 2. Extract Radiomics features:<br>
  &emsp; &ensp; a. Use defalut Radiomics setting and total meaningful features is 107<br>
   &emsp; &emsp; i. First Order Features<br>
   &emsp; &emsp; ii. Gray Level Co-occurrence Matrix Features (GLCM)<br>
   &emsp; &emsp; iii. Gray Level Dependence Matrix Features (GLDM)<br>
   &emsp; &emsp; iv. Gray Level Run Length Matrix Features (GLRLM)<br>
   &emsp; &emsp; v. Gray Level Size Zone Matrix Features (GLSZM)<br>
   &emsp; &emsp; vi. Neighbouring Gray Tone Difference Matrix Features (NGTDM)<br>

  &emsp; 3. Use ICC to extract useful Radiomics features:<br>
  &emsp; &ensp; a. Use function "rpy2.robjects.packages.importr("ICC")" to compute ICC values.<br>
  &emsp; &ensp; b. ICC values:<br>
    &emsp; &emsp; &emsp; We get very pool results, since all ICC values are less than 0.4 (poor correlation). You can check the more detail Radiomics results in my GItHub.<br>

  &emsp; 4. Design model:<br>
  &emsp; &emsp; &ensp; ICC results are very weak so that we cannot to design robust model to classify.<br><br>


* <big><b>Method 3 (Use CNN model with segmentation MR images):</b></big>
  <br>1. Segment the white matter<br>
<div style="text-align:center"><img src="/images/projects/NYMU/WM.png" width="60%" height="60%"/></div><br>
  &emsp; 2. Use linear normalize original value of the white matter to 0 ~ 1024<br>
  &emsp; 3. Lerning Rate: $$1 \times 10^{-5}$$, Batch Size: 10, Epoch: 100<br>
  &emsp; &ensp; Training Results Figure:<br>
  &emsp; &emsp; a. Accuracy:<br>
<div style="text-align:center"><img src="/images/projects/NYMU/acc_r_000001_WM.png" width="60%" height="60%"/></div><br>
  &emsp; &emsp; b. Loss:<br>
<div style="text-align:center"><img src="/images/projects/NYMU/loss_r_000001_WM.png" width="60%" height="60%"/></div><br>
  &emsp; &emsp; &ensp; Testing Accuracy: 0.7125<br>
  &emsp; &emsp; &ensp; Confusion Matrix:<br>

  <table>
        <tr>
            <th rowspan="2">Actual</th>
            <th colspan="2">Predict</th>
        </tr>
        <tr>
            <td>Negative</td>
            <td>Positive</td>
        </tr>
        <tr>
            <td>Negative</td>
            <td>36</td>
            <td>7</td>
        </tr>
        <tr>
            <td>Positive</td>
            <td>16</td>
            <td>21</td>
        </tr>
    </table><br>

  &emsp; 4. Lerning Rate: $$1 \times 10^{-4}$$, Batch Size: 10, Epoch: 100<br>
  &emsp; &ensp; Training Results Figure:<br>
  &emsp; &emsp; a. Accuracy:<br>
<div style="text-align:center"><img src="/images/projects/NYMU/acc_r_00001_WM.png" width="60%" height="60%"/></div><br>
  &emsp; &emsp; b. Loss:<br>
<div style="text-align:center"><img src="/images/projects/NYMU/loss_r_00001_WM.png" width="60%" height="60%"/></div><br>
  &emsp; &emsp; &ensp; Testing Accuracy: 0.65<br>
  &emsp; &emsp; &ensp; Confusion Matrix:<br>

   <table>
        <tr>
            <th rowspan="2">Actual</th>
            <th colspan="2">Predict</th>
        </tr>
        <tr>
            <td>Negative</td>
            <td>Positive</td>
        </tr>
        <tr>
            <td>Negative</td>
            <td>32</td>
            <td>11</td>
        </tr>
        <tr>
            <td>Positive</td>
            <td>17</td>
            <td>20</td>
        </tr>
    </table>


## Conclusions



## Future works



## References

  1. 
  2. 


## Acknowledgements

I would like to thank [Dr. Albert C Yang](https://www.researchgate.net/profile/Albert_C_Yang) and Jean Lee who provided all brain MR images and gave me guidance and advice.

## Extension

  * [GitHub Link](https://github.com/yuehchou/Disorder)

