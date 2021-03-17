import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { search } from "../../api/api";
import { PostModel } from "../../models/PostModel";

interface Props {
  url: string;
}

export default function ListaPost(props: Props) {
  const { url } = props;
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    search(url, setPosts);
  }, [url]);

  return (
    <section className="posts container">
      {posts.map((post) => (
        <Link
          to={`/posts/${post.id}`}
          className={`cartao-post cartao-post--${post.categoria}`}
          key={post.id}
        >
          <article key={post.id}>
            <h3 className="cartao-post__titulo">{post.title}</h3>
            <p className="cartao-post__meta">{post.metadescription}</p>
          </article>
        </Link>
      ))}
    </section>
  );
}
