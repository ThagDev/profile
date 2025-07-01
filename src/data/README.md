# Data Management

Folder này chứa tất cả các mock data và static data được tách riêng khỏi các component và page.

## Cấu trúc

- `blog-posts.ts` - Dữ liệu blog posts và các helper functions
- `projects.ts` - Dữ liệu projects cho home page  
- `portfolio-details.ts` - Dữ liệu chi tiết các portfolio projects
- `breadcrumbs.ts` - Dữ liệu breadcrumb navigation
- `contact.ts` - Thông tin liên hệ và social links
- `site-metadata.ts` - Metadata tổng quát của website
- `index.ts` - Export tất cả data

## Cách sử dụng

### Import từ file riêng lẻ:
```typescript
import { blogPosts, blogCategories } from '@/data/blog-posts';
import { projects } from '@/data/projects';
import { contactInformation } from '@/data/contact';
```

### Import từ index file:
```typescript
import { blogPosts, projects, contactInformation } from '@/data';
```

## Mở rộng

Khi thêm data mới:
1. Tạo file `.ts` mới trong folder này
2. Export types và data
3. Thêm export vào `index.ts`
4. Update các component/page để sử dụng data từ đây

## Lợi ích

- **Tách biệt concerns**: Logic presentation và data riêng biệt
- **Dễ maintain**: Tất cả data ở một nơi
- **Type safety**: TypeScript interfaces cho tất cả data
- **Reusable**: Data có thể dùng chung cho nhiều component
- **Testable**: Dễ test và mock data
