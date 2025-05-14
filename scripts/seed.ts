const {PrismaClient} = require('../lib/generated/prisma')
const database = new PrismaClient();

async function main() {
  try {
    const categories = [
      {
        name: "Công nghệ thông tin & Phần mềm",
        subCategories: {
          create: [
            { name: "Phát triển Web" },
            { name: "Khoa học Dữ liệu" },
            { name: "An ninh mạng" },
            { name: "Kiểm thử phần mềm" },
            { name: "Phát triển ứng dụng di động" },
            { name: "Điện toán đám mây" },
          ],
        },
      },
      {
        name: "Kinh doanh",
        subCategories: {
          create: [
            { name: "Khởi nghiệp" },
            { name: "Quản lý dự án" },
            { name: "Kế toán" },
            { name: "Nhân sự" },
            { name: "Phân tích kinh doanh" },
            { name: "Bán hàng" },
          ],
        },
      },
      {
        name: "Thiết kế",
        subCategories: {
          create: [
            { name: "Thiết kế UX/UI" },
            { name: "Minh họa" },
            { name: "Thiết kế logo & thương hiệu" },
            { name: "Chỉnh sửa ảnh & video" },
            { name: "Thiết kế game" },
            { name: "Typography" },
          ],
        },
      },
      {
        name: "Sức khỏe & Thể hình",
        subCategories: {
          create: [
            { name: "Huấn luyện cá nhân" },
            { name: "Pilates" },
            { name: "Nấu ăn lành mạnh" },
            { name: "Sức khỏe tinh thần" },
            { name: "Y học cổ truyền" },
            { name: "Chăm sóc da & làm đẹp" },
          ],
        },
      },
      {
        name: "Nghệ thuật & Sáng tạo",
        subCategories: {
          create: [
            { name: "Hội họa" },
            { name: "Âm nhạc" },
            { name: "Nhiếp ảnh" },
            { name: "Viết lách" },
            { name: "Thủ công mỹ nghệ" },
            { name: "Diễn xuất" },
          ],
        },
      },
      {
        name: "Ngôn ngữ",
        subCategories: {
          create: [
            { name: "Tiếng Anh" },
            { name: "Tiếng Nhật" },
            { name: "Tiếng Hàn" },
            { name: "Tiếng Trung" },
            { name: "Tiếng Pháp" },
            { name: "Tiếng Đức" },
          ],
        },
      },
      {
        name: "Phát triển cá nhân",
        subCategories: {
          create: [
            { name: "Kỹ năng giao tiếp" },
            { name: "Quản lý thời gian" },
            { name: "Lãnh đạo" },
            { name: "Tư duy phản biện" },
            { name: "Thuyết trình" },
            { name: "Mục tiêu & Động lực" },
          ],
        },
      },
      {
        name: "Marketing & Bán hàng",
        subCategories: {
          create: [
            { name: "SEO" },
            { name: "Social Media Marketing" },
            { name: "Content Marketing" },
            { name: "Email Marketing" },
            { name: "Bán hàng chuyên nghiệp" },
            { name: "Quảng cáo trực tuyến" },
          ],
        },
      },
      {
        name: "Khoa học & Toán học",
        subCategories: {
          create: [
            { name: "Toán cao cấp" },
            { name: "Vật lý" },
            { name: "Hóa học" },
            { name: "Sinh học" },
            { name: "Thống kê" },
            { name: "Thiên văn học" },
          ],
        },
      },
      {
        name: "Âm nhạc",
        subCategories: {
          create: [
            { name: "Piano" },
            { name: "Guitar" },
            { name: "Thanh nhạc" },
            { name: "Sản xuất âm nhạc" },
            { name: "Lý thuyết âm nhạc" },
            { name: "Violin" },
          ],
        },
      },
    ];

    // Sequentially create each category with its subcategories
    for (const category of categories) {
      await database.category.create({
        data: {
          name: category.name,
          subCategories: category.subCategories,
        },
        include: {
          subCategories: true,
        },
      });
    }

    await database.level.createMany({
      data: [
        { name: "Người mới bắt đầu" },
        { name: "Trung cấp" },
        { name: "Nâng cao" },
        { name: "Mọi trình độ" },
      ],
    });

    console.log("Seeding thành công");
  } catch (error) {
    console.log("Seeding thất bại", error);
  } finally {
    await database.$disconnect();
  }
}

main();