import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

export default function News(props) {
    let capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize,] = useState(9);
    const [totalResults, setTotalResults] = useState(0);
    const updateNews = async () => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=346b36e5abe24f6093f9848162af03f2&page=${page}&pageSize=${pageSize}&category=${props.category}`;
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(60)
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        props.setProgress(100);
    }
    useEffect(() => {
        if (props.category !== "general") {
            document.title = `Think News | ${capitalize(props.category)}`
        }
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    let spinner = <Spinner />
    const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=346b36e5abe24f6093f9848162af03f2&page=${page}&pageSize=${pageSize}&category=${props.category}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults);
    }
    return (
        <div>
            <section>
                <div className="text-center bg-gray-50 text-gray-800 pt-20 px-6">
                    <h1 className="text-5xl md:text-6xl xl:text-7xl mb-12 font-bold tracking-tight">Welcome to <span className="text-blue-600">Think News</span></h1>
                </div>
                <h2 style={{ color: props.mode }} className="text-3xl font-bold mb-12 text-center">Latest articles {props.category !== "general" ? `on ${props.category}` : ""}</h2>
            </section>
            <section>
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {articles?.map((e, index) => {
                            return <NewsItem key={index} category={props.category} image={e.urlToImage?e.urlToImage:'https://dummyimage.com/720x400'} title={e.title} description={e.description ? e.description.split(" ").slice(0, 30).join(" ") + "..." : "  "} url={e.url} publishedAt={e.publishedAt} author={e.author} source={e.source.name} />
                        })}
                    </div>
                </div>
            </section>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults.length}
                loader={<div className="flex justify-center"><Spinner /></div>}
            >
            </InfiniteScroll>
        </div>
    )
}


News.defaultProps = {
    category: 'general'
};