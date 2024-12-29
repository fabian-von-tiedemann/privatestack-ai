import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatDate } from '@/lib/utils';

interface BlogPostProps {
  post: {
    slug: string;
    title: string;
    description: string;
    date: string;
    category: string;
    readingTime: string;
    image: string;
  };
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col items-start overflow-hidden"
    >
      <Link to={`/blog/${post.slug}`} className="relative w-full overflow-hidden rounded-2xl">
        <img
          src={post.image}
          alt={post.title}
          className="aspect-[16/9] w-full bg-gray-100 object-cover transition duration-300 group-hover:scale-105 sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </Link>
      <div className="w-full">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={post.date} className="text-gray-500">
            {formatDate(post.date)}
          </time>
          <span className="relative z-10 rounded-full bg-primary-50 px-3 py-1.5 font-medium text-primary">
            {post.category}
          </span>
          <span className="text-gray-500">{post.readingTime}</span>
        </div>
        <div className="relative">
          <h3 className="mt-3 text-xl font-semibold leading-tight text-gray-900 group-hover:text-primary">
            <Link to={`/blog/${post.slug}`}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-4 line-clamp-3 text-base leading-relaxed text-gray-600">{post.description}</p>
        </div>
      </div>
    </motion.article>
  );
}