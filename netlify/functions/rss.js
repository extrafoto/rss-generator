const RSS = require("rss");

exports.handler = async () => {
    const feed = new RSS({
        title: "Meu Feed RSS",
        description: "Últimas notícias",
        feed_url: "https://seu-site.netlify.app/.netlify/functions/rss",
        site_url: "https://www.globo.com/"
    });

    feed.item({
        title: "Notícia Exemplo",
        description: "Descrição da notícia",
        url: "https://www.globo.com/noticia-exemplo",
        date: new Date()
    });

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/xml" },
        body: feed.xml()
    };
};
