---
title: "Algorithmic Trading: Can I Build an Edge With AI and Public Data?"
description: Quants are not that simple to build
category: Finance
pubDate: 2026-08-18
cover: /images/uploads/chatgpt-image-aug-17-2026-11_58_35-pm.png
tags: []
featured: false
draft: false
---
There are only a few people I get inspired by besides my parents. Actually, four people to be exact.

The first person who inspired me, and still inspires me to this day, was Stephen Curry. I mean, not just because of the way he plays basketball, but generally as a human being. Very inspirational.

Then there was Mark Cuban. I don't think he is necessarily a genius, but generally he is a very smart guy who knows how to position himself. He understands opportunities, timing, and where things are going.

Of course, Mr. Warren Buffett. I mean, who doesn't get inspired by him? He was born during the Great Depression and has outlasted pandemics, wars, recessions, market crashes, and completely different generations of investors while still remaining at the top of the investing world.

The fourth person is actually a mathematician called Jim Simons.

He was one of the pioneers of modern quantitative investing.

I read the book about him, *The Man Who Solved the Market*, and found it very inspirational. He was a highly regarded mathematician who spent years trying to find persistent patterns and inefficiencies in financial markets through mathematics, statistics, and massive amounts of data.

Eventually, he built Renaissance Technologies, and its Medallion Fund became famous for producing extraordinary returns over a very long period of time.

I really recommend reading *The Man Who Solved the Market*. It is a very fun book, especially if you are interested in finance, mathematics, technology, or systematic investing.

Jim Simons is also one of the main reasons I became interested in algorithmic trading.

So I decided that my next project will be building my own algorithmically managed portfolio.

You guys can follow the project over the coming year. I will post updates once in a while about the models, backtests, mistakes, changes, and eventually whether I can actually create something that works.

## **What Is Algorithmic Trading?**

Algorithmic trading is a pretty broad term, but for this project I am mainly interested in systematic or quantitative trading.

At its core, my approach starts with a hypothesis about how markets behave.

You translate that hypothesis into measurable variables, define the conditions, test them against historical data, and eventually turn the strategy into code that can execute trades automatically when those conditions are met.

The concept itself is simple.

Finding a hypothesis that continues to work after transaction costs, changing market regimes, overfitting, and competition is obviously the difficult part.

Markets contain an enormous amount of noise, and if you test enough variables against enough historical data, eventually you will find something that looks profitable simply by accident.

That is where the difference between finding a pattern and finding an actual edge becomes important.

The interesting part for me is trying to identify relationships that are not immediately obvious, especially across large datasets and potentially nonlinear relationships between variables.

## **My Biggest Limitation**

The biggest problem is pretty obvious.

I don't have access to the same data or computing infrastructure that sophisticated quantitative hedge funds have.

Large firms can buy alternative datasets, process enormous amounts of market data, employ teams of mathematicians and engineers, and run models across computing infrastructure that I obviously don't have access to.

I am going to try to do this on my laptop.

So I don't expect to compete with Renaissance Technologies on speed, data quantity, or computing power.

The question for me is whether those are the only places where an edge can exist.

If I build a regularized linear regression model using publicly available price and fundamental data, I am not sure how much edge that can realistically give me.

The problem is not that these models are useless. The problem is that the barriers to building them are extremely low.

Everyone has access to the same historical prices.

Everyone can download financial statements.

Everyone can run regressions.

Everyone can build factor models.

And today, almost everyone can ask AI to generate the Python code required to do it.

So if I am using the same data, similar models, and similar signals as everyone else, it is difficult to believe there will be a meaningful persistent edge there.

There is also the question of how many stable linear relationships actually exist in financial markets. Markets adapt, correlations change, regimes change, and a relationship that looked strong historically can disappear very quickly.

## **Where AI Gets Interesting**

One thing Jim Simons did not have when he started is access to the kind of generative AI and large language models we have available today.

Obviously, I don't mean that having access to ChatGPT suddenly gives me an advantage over quantitative hedge funds. They have access to the same technology and significantly more resources.

What interests me is how AI changes the amount of information that one person can realistically process.

Traditionally, structured financial data is relatively easy to work with.

Price.

Volume.

Revenue.

Margins.

Interest rates.

Valuation multiples.

Volatility.

You can put these things directly into a model.

Unstructured data is much more interesting.

Earnings call transcripts, management commentary, news articles, company announcements, job postings, industry reports, investor discussions, product reviews, and other forms of text contain information that is much more difficult to quantify.

That is where I think AI could become useful.

Instead of treating an earnings call as 50 pages of text, an AI model could potentially convert certain characteristics of that call into numerical variables.

How confident does management sound compared with the previous quarter?

Are executives becoming more defensive when answering analyst questions?

Is management suddenly talking much more about cost reductions?

Has the language around demand changed?

Are there differences between what management says in prepared remarks and how they answer questions afterward?

You can start converting qualitative information into variables that can potentially become part of a larger model.

That is much more interesting to me than simply asking AI which stock to buy.

## **Where I Think the Potential Edge Is**

One area I think is still interesting is using AI to analyze unstructured data that people don't normally include in traditional quantitative models.

Not because nobody is doing it. Sophisticated funds obviously are.

But because the tools required to experiment with it have become much more accessible.

My idea is to combine traditional structured financial data with variables extracted from unstructured sources and see whether any of them contain incremental predictive information.

The important word there is incremental.

If a variable looks interesting but gives me exactly the same information already captured by momentum, volatility, valuation, or another existing factor, it doesn't really add much.

What I want to find is information that improves the model after controlling for the obvious stuff.

Then comes the harder part.

Does it survive out-of-sample testing?

Does it survive different market regimes?

Does it still work after transaction costs?

Does the relationship make economic sense, or did I just accidentally data-mine a beautiful backtest?

And most importantly, does it continue to work when real money is involved?

That is what I am going to try to find out.

I have no idea how far I will get, but that is also what makes the project interesting.

I will keep you guys updated.
