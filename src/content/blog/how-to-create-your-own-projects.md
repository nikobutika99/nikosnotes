---
title: How to Create Your Own Projects
description: Everybody should be creator
category: Technology
pubDate: 2026-10-12
cover: /images/uploads/a-bright-claude-code-idea.png
tags: []
featured: false
draft: false
---
Since I started Nikos Notes, I have been getting a lot of compliments from colleagues and friends about my website and what I do.

The original idea was for me to start a weekly newsletter, but I really don’t like newsletters. In the beginning, it’s nice and I tend to read them. At some point, I stop, they start to feel like spam, and then I get annoyed.

Then I decided to just create a website so that whenever people feel like it, they can visit and start consuming the content. Thanks to all of you who are reading it.

## **Why you should create your own project**

I think we are heading in that direction, especially with the increasing capabilities of AI. Everybody should start creating their own project, whether it’s a blog, a community, or a company based on an idea they have had for years.

There are a couple of reasons why you should do that.

**The first obvious reason is that your job could become obsolete because of AI.** AI could do the work at the same level as you, or even better.

**The second reason is that your job function changes.** I believe this is going to affect many jobs. The ways of working are going to completely change.

**Lastly, I think more and more people are going to become creators, founders, and inventors.** Even if you don’t start your own company, within the company you work for, you should position yourself as someone who is able to come up with ideas and simply create things on your own.

Here, I will write down a guide on how you can create a side project on your own, with the help of the already amazing tools we have. It is basically a guide from zero knowledge to creating your first project.

## **Accounts to create**

For the setup I recommend, start with these accounts. You won’t need every service for every project.

### **1. GitHub**

GitHub is a place where you upload your code. Imagine it as a cloud where you keep your project. It also has characteristics of social media, meaning you can visit other people’s profiles and see their projects and files if they are public.

The reason I recommend having GitHub is that it’s a nice way to keep your projects saved online, so you don’t depend on your local computer all the time. You just need to make sure you push your changes there.

**Cost: FREE for this setup.**

### **2. An AI subscription**

You have more options here. You can go with OpenAI, Anthropic, or Google and their AI tools. If you ask me, from today’s perspective, I would go with Claude.

For this guide, I recommend Claude Pro, which includes Claude Code. It currently lists around 20 euros a month when billed monthly. 

For small projects, that can be enough to get started, but usage limits apply.

### **3. Netlify or Vercel**

Register for a hosting service, either Netlify or Vercel. This is where you can host your website or web project. I personally host on both.

Both have free tiers. For small projects like Nikos Notes, a free version can be sufficient, as long as you stay within its limits. 

If I had to choose one, I would go with Netlify for most people.

**Cost: FREE within the free plan’s limits.**

### **4. Supabase, if your project needs a database**

I recommend getting a Supabase account if your project requires a database. Supabase is where you can hold data for your project. It provides a database and other backend tools.

If your project requires you to hold or collect some type of data, Supabase is one option. You don’t need it for every project.

**Cost: FREE within the free plan’s limits.** 

## **Things you need to install**

Let’s assume you listened to me and went with Claude.

Download and install the Claude desktop app on your computer, then open the Code tab. You can also install Claude Code in your terminal if you want to work that way. You don’t need both to get started.

How do you set it up in your terminal? You can ask Claude, and it will explain the steps.

One mistake a lot of beginners make is confusing Claude Chat with Claude Code. Claude Chat is for conversations and can also create some files. With Claude Code, you give it access to your project files so it can create and edit them and run commands on your computer, within the permissions you give it. You can give hik as much access you want.

### **Git**

If you have Windows, I recommend installing Git for Windows.

Git, to explain it in simple terms, works like this: you start developing a project and get to a point where it runs nicely and everything is good. Suddenly, you want to add a feature. You add it, and you break the whole project. Without a saved version, you are screwed.

Look at Git as a memory card. It saves different versions of your codebase when you make commits. If you break something, you can revert to an old version. It doesn’t automatically save every change, so ask Claude Code to make commits as you go.

If you have a Mac or Linux, Git may already be installed, but it is not guaranteed. You can check with git --version and install it if needed.

**Cost: completely FREE.**

## **Tips for developing a project**

The whole development process can happen within Claude Code. You are instructing Claude Code on what you want.

If you had to take one piece of advice from here, it is this:

**DEVELOP THE PROJECT IN SMALL, SMALL STEPS AND SPEND MOST OF YOUR TIME IN PLAN MODE.**

Don’t tell Claude, “Develop a social network that is much better than Facebook,” and close the laptop.

Build it task by task. If you come up with a good plan, you can reduce how much you need to intervene manually,

### **A blog can be super simple**

If you want to develop a blog, for example, you don’t necessarily need your own backend or database. You can set it up with a Git-based CMS, which means a content management system that stores your content in your repository.

With that setup, every time you publish a new article, it can push the content to GitHub and trigger an update to your website. A CMS such as Decap CMS supports this approach.

Super simple. For Nikos Notes, my yearly hosting and domain cost is €16, just for the domain. Thats it! 

### **Design**

Use screenshots. AI is really good at following them.

For Nikos Notes, I wanted something Reddit-inspired, and I found another website I liked. I pasted screenshots of both into the chat and started telling it what I liked, what I disliked, and where to change the colours. Then I came up with that design.

Always have screenshots. They are very useful because AI doesn’t have to guess everything and can use them as a reference.

### **Reviewing code**

For easy projects like blogs and landing pages, you don’t need to understand every line of code. But still ask AI to review the code and test it before publishing.

If you use Opus 5.5 to develop it is really really good so I would put alot of trust in it for simple projects

For complex projects, instruct it to add comments for you, but make sure it doesn’t comment too much. You don’t need huge amounts of unnecessary text increasing the context size.

Generally, I do think it is a problem when massive codebases are generated and humans are not truly in the loop. But if I had to hire an average programmer to create a simple project for me, I would already consider using AI instead.

### **Test and review**

Test and review everything. That is another reason why you need to develop in chunks, rather than as a whole.

If you don’t do that, you can end up with a massive project with a bunch of bugs. It is always harder to change stuff after you are done.

**PLAN, PLAN, PLAN. REVIEW, REVIEW, REVIEW.**

### **Database**

Use Supabase for the database if your project needs one. You can, of course, host it locally, but if your online project depends on a database running on your laptop, your laptop needs to stay on and be reachable.

Supabase is pretty good. One thing you need to know is that being online does not automatically mean your data is public. Access depends on your permissions and security policies.

If you don’t want people to have the ability to edit or download your data, you need to set the access rules properly. In Supabase, check Row Level Security, or RLS, and the policies that control who can read or change each row.

Tables created through the Supabase Dashboard have RLS enabled by default. If you create tables through SQL or another tool, make sure you enable it yourself and set the right policies.

For example, on the paper trading website I made, I left the data public. Ahaha, I probably should not have said that, but I am not expecting people to do negative stuff to it. It’s paper money, not real money. If somebody wants to download my data, they are more than welcome to do it.

### **Markdown files**

I do use Markdown, or MD, files so AI doesn’t go off track and can read my instructions before starting to implement stuff.

I have seen people saying lately that these files just increase the context size and are less useful because AI already follows a plan really well. In here, I am divided. I still use MD files, but maybe I should try without them.

For Claude Code specifically, CLAUDE.md is designed for project instructions and is read at the start of a session. Keeping it short and relevant is more useful than filling it with instructions the AI doesn’t need.

### **Use CLI, MCP, and APIs**

Very often, the thing you are looking for already exists, so you don’t have to create everything from the ground up. Use those tools.

CLI means command-line interface. MCP means Model Context Protocol, which lets AI tools connect to external tools and data. API means application programming interface, which lets software communicate with other software.

For example, I extract financial market data from the Alpaca API. Another method could have been to sit down and connect directly to exchange data services, which could have taken me so much more time.

People at Alpaca already suffered so I did not have to suffer, so why not use it?

You can connect and integrate thousands of applications, tools, and data sources that are already out there. Just check their access rules, limits, and any costs.

## **General tip**

Just start creating, and you will learn throughout the journey.

AI is your best friend. You don’t understand why? Ask. You don’t understand how? Ask. Ask everything. You can tell it that you are a complete beginner in this area, and it will guide you as a beginner.

As you can see, your first small project can cost you little more than an AI subscription, plus a domain if you want one, as long as you stay within the free services’ limits.

If it doesn’t work, think of it as having wasted €20 on a terrible cheeseburger.

You keep trying again, and at one point, that cheeseburger is going to taste hella good.
