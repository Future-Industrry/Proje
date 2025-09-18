// کامپوننت نمایش پست‌های اینستاگرام
import { instagramPosts } from '../../assets/data/data.js';
import { Title, BodyOne } from '../common/CustomComponents.jsx';

// بخش اصلی برای نمایش پست‌ها
export const InstagramPost = () => {
  return (
    <section className="container my-16">
      <Title level={3} className="text-center mb-8">پست‌های اینستاگرام</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {instagramPosts.map((post) => (
          <div key={post.id} className="instagram-post relative overflow-hidden rounded-lg shadow">
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <BodyOne className="text-sm">{post.caption}</BodyOne>
              <div className="flex gap-4 mt-2">
                <BodyOne className="text-xs">{post.likes} لایک</BodyOne>
                <BodyOne className="text-xs">{post.comments} نظر</BodyOne>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};