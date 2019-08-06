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


## Methods

* <big><b>Method 1 (Use CNN model):</b><big><br>

    Model Graph (present by Tensorboard):<br>

<div style="text-align:center"><img src="/images/projects/NYMU/model.png" width="150%" height="150%"/></div><br>


* <big><b>Method 2 (Use Radiomics):</b><big><br>


## Results

* <big><b>Method 1 (Use CNN model):</b><big><br>

  a. Lerning Rate: $$1\times10^{-5}$$, Batch Size: 10, Epoch: 100<br>
  Training Results Figure:<br>
  i. Accuarcy:<br>

<div style="text-align:center"><img src="/images/projects/NYMU/acc_r_000001.png" width="60%" height="60%"/></div>

   <br>ii. Loss:<br>
<div style="text-align:center"><img src="/images/projects/NYMU/loss_r_000001.png" width="60%" height="60%"/></div>

   <br>Testing Accuracy: 0.6097560975609756<br>
    Confusion Matrix:<br>
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
            <td>17</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Positive</td>
            <td>11</td>
            <td>8</td>
        </tr>
    </table>

   <br><br>b. Lerning Rate: $$1\times10^{-4}$$, Batch Size: 10, Epoch: 100<br>
   Training Results Figure:<br>
   i. Accuarcy:<br>
<div style="text-align:center"><img src="/images/projects/NYMU/acc_r_00001.png" width="60%" height="60%"/></div>

   <br>ii. Loss:<br>
<div style="text-align:center"><img src="/images/projects/NYMU/acc_r_00001.png" width="60%" height="60%"/></div>

   Testing Accuracy: 0.6585365853658537<br>
   Confusion Matrix:<br>

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
            <td>17</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Positive</td>
            <td>9</td>
            <td>10</td>
        </tr>
    </table><br><br>



* <big><b>Method 2 (Use Radiomics):</b><big><br>




## Conclusions



## References

  1. 
  2. 


## Acknowledgements

I would like to thank [Dr. Albert C Yang](https://www.researchgate.net/profile/Albert_C_Yang) and Jean Lee who provided all brain MR images and gave me guidance and advice.

## Extension

  * GitHub Link

