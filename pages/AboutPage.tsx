
import React from 'react';

const InfoSection: React.FC<{ title: string; imageUrl: string; imageLeft?: boolean; children: React.ReactNode }> = ({ title, imageUrl, imageLeft = false, children }) => {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center py-12">
            <div className={`p-4 ${imageLeft ? 'md:order-1' : 'md:order-2'}`}>
                <img src={imageUrl} alt={title} className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/3] transform transition-transform hover:scale-105" />
            </div>
            <div className={`p-4 ${imageLeft ? 'md:order-2' : 'md:order-1'}`}>
                <h2 className="text-3xl font-serif text-primary mb-4">{title}</h2>
                <div className="text-text-secondary leading-relaxed space-y-4">
                    {children}
                </div>
            </div>
        </div>
    )
}


const AboutPage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="relative h-64 md:h-80 rounded-t-lg overflow-hidden">
        <img src="https://picsum.photos/1600/500?random=about_hero" alt="Serene spa interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white text-center">Về Rocket Global Spa</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 py-12">

        <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg text-text-secondary leading-relaxed">
                Chào mừng bạn đến với Rocket Global Spa - không gian yên bình để bạn tìm lại sự cân bằng, tái tạo năng lượng và chăm sóc bản thân một cách trọn vẹn nhất.
            </p>
        </div>
        
        <InfoSection title="Triết Lý Của Chúng Tôi" imageUrl="https://picsum.photos/800/600?random=16" imageLeft>
            <p>
                Tại Rocket Global Spa, chúng tôi tin rằng sức khỏe đích thực là sự cân bằng hài hòa giữa tâm trí, cơ thể và tinh thần. Triết lý của chúng tôi bắt nguồn từ việc cung cấp một môi trường yên tĩnh và sang trọng, nơi bạn có thể thoát khỏi những căng thẳng của cuộc sống hàng ngày.
            </p>
             <p>
                Chúng tôi kết hợp các truyền thống chữa bệnh cổ xưa với các kỹ thuật trị liệu hiện đại để tạo ra những trải nghiệm được cá nhân hóa, đáp ứng nhu cầu riêng của bạn, thúc đẩy sự thư giãn sâu và hạnh phúc lâu dài.
            </p>
        </InfoSection>

        <div className="border-t my-8 border-gray-200"></div>

        <InfoSection title="Sứ Mệnh & Tầm Nhìn" imageUrl="https://picsum.photos/800/600?random=17">
            <p>
               Sứ mệnh của chúng tôi là trở thành một thiên đường của sự yên tĩnh và là người dẫn đầu trong lĩnh vực chăm sóc sức khỏe. Chúng tôi cam kết cung cấp dịch vụ và phương pháp điều trị đặc biệt vượt quá sự mong đợi của khách hàng.
            </p>
            <p>
                Thông qua đội ngũ chuyên gia tận tâm, không gian thanh bình và các sản phẩm tự nhiên cao cấp, chúng tôi mong muốn truyền cảm hứng cho một lối sống lành mạnh và giúp bạn đạt được trạng thái thanh thản và tái tạo hoàn toàn.
            </p>
        </InfoSection>

        <div className="border-t my-8 border-gray-200"></div>

        <InfoSection title="Đội Ngũ Chuyên Gia" imageUrl="https://picsum.photos/800/600?random=18" imageLeft>
            <p>
                Đội ngũ của chúng tôi là trái tim của Rocket Global Spa. Mỗi chuyên viên trị liệu đều được cấp chứng chỉ, có nhiều kinh nghiệm và chung một niềm đam mê mang lại sự chăm sóc tốt nhất. Chúng tôi liên tục đầu tư vào đào tạo và phát triển để đảm bảo rằng chúng tôi luôn đi đầu trong các kỹ thuật và phương pháp chăm sóc sức khỏe mới nhất.
            </p>
        </InfoSection>

      </div>
    </div>
  );
};

export default AboutPage;
