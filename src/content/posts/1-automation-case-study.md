---
title: 'Automating Mundane Tasks: A Case Study'
date: '2025-10-28'
tags: ['automation', 'python', 'powershell']
excerpt: 'How I saved hours of manual work by building a simple automation script.'
cover_image: '/assets/images/project-placeholder.png'
---

## The Problem

Every week, I had to manually download a report, filter it, and email it to a list of stakeholders. This was a repetitive and time-consuming task.

## The Solution

I developed a Python script that uses the `requests` library to download the report, `pandas` to filter the data, and `smtplib` to send the emails. The script is scheduled to run automatically every Monday morning.

```python
import requests
import pandas as pd

# Your code here
```

This simple automation saved me hours of work each month and eliminated the possibility of human error.
