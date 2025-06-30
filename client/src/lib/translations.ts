export interface Translation {
  [key: string]: string | Translation;
}

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      home: "Home",
      consensus: "Consensus",
      roadmap: "Roadmap",
      team: "Team",
      ecosystem: "Ecosystem"
    },
    hero: {
      title: "Blockchain for Challengers",
      subtitle: "",
      description: "Olym3 is a Layer 1 blockchain platform tailored for challengers – individuals and organizations breaking boundaries to shape the future.",
      buildButton: "Build on OLYM3",
      joinButton: "Join Community",
      stats: {
        mechanisms: "Consensus Mechanisms",
        launch: "Mainnet Launch",
        compatible: "Compatible"
      }
    },
    vision: {
      title: "Our Vision",
      description: "Olym3 aims to build a Web3 ecosystem rooted in Vietnamese identity, where those who truly contribute and perform are rewarded through reputation and impact.",
      differentiators: "Key Differentiators",
      merit: "Merit-based validation system",
      community: "Community-driven reputation system",
      evm: "EVM compatibility for seamless integration"
    },
    consensus: {
      title: "Triple Consensus Innovation",
      description: "Olym3 introduces three revolutionary consensus mechanisms that reward merit, contribution, and reputation",
      poc1: {
        title: "Proof of Challenge",
        subtitle: "PoC1",
        description: "Join defined challenges (hackathons, AI quests, DeFi missions...) to prove your problem-solving capabilities. Smart contracts record results transparently and immutably.",
        features: ["Hackathon Participation", "AI Challenges", "DeFi Missions"]
      },
      poc2: {
        title: "Proof of Contribution",
        subtitle: "PoC2",
        description: "Tracks meaningful contributions like documentation, app development, community support, and infrastructure improvement. Contributions are quantified and evaluated by the community and DAOs.",
        features: ["Documentation", "App Development", "Community Support"]
      },
      por: {
        title: "Proof of Reputation",
        subtitle: "PoR",
        description: "Based on challenge and contribution history, each account is assigned a reputation score. Reputation cannot be bought – it can only be earned through consistent, genuine actions.",
        features: ["Historical Performance", "Community Validation", "Earned Authority"]
      }
    },
    useCases: {
      title: "Real-World Applications",
      competitions: {
        title: "Student Competitions",
        description: "AI/Web3 competitions for students to prove their skills and earn recognition"
      },
      dao: {
        title: "DAO Management",
        description: "Transparent DAO grant management with merit-based allocation"
      },
      gaming: {
        title: "Play-to-Prove Gaming",
        description: "Games that integrate challenges where players prove their capabilities"
      },
      education: {
        title: "Education Platform",
        description: "Learning and testing systems powered by blockchain verification"
      }
    },
    roadmap: {
      title: "Development Roadmap",
      q2: {
        title: "Testnet Launch",
        description: "First testnet launch with basic PoC mechanisms implemented"
      },
      q3: {
        title: "Challenge Ecosystem",
        description: "Host 10+ AI/Web3 challenges and build developer community"
      },
      q4: {
        title: "Mainnet Launch",
        description: "Official mainnet deployment with full consensus mechanisms"
      },
      "2026": {
        title: "Southeast Asia Expansion",
        description: "Ecosystem expansion across Southeast Asia with strategic partnerships"
      }
    },
    team: {
      title: "Team & Advisors",
      description: "Olym3 is founded by a team of developers, advisors, and hackathon organizers in Vietnam, directly connected to universities, blockchain communities, and AI education hubs.",
      core: {
        title: "Core Development Team",
        description: "Experienced blockchain developers with expertise in consensus mechanisms and smart contract development"
      },
      academic: {
        title: "Academic Advisors",
        description: "University professors and researchers from leading Vietnamese institutions specializing in AI and blockchain"
      },
      community: {
        title: "Community Leaders",
        description: "Hackathon organizers and community builders with deep connections in Vietnam's tech ecosystem"
      }
    },
    architecture: {
      title: "System Architecture",
      evm: {
        title: "EVM Compatible Layer 1",
        description: "Full Ethereum Virtual Machine compatibility for seamless dApp deployment and cross-chain integration"
      },
      validators: {
        title: "Decentralized Validators",
        description: "Reputation-weighted validator network ensuring fair and merit-based block production"
      },
      sdk: {
        title: "Open SDK",
        description: "Developer-friendly SDK allowing easy integration of Proof of Challenge mechanisms into existing platforms"
      }
    },
    cta: {
      title: "Join the OLYM3 Revolution",
      description: "Olym3 is not just a blockchain. It's a fair playground for all talents to shine through skill, contribution, and earned reputation. Let's build a future where technology and merit define success.",
      build: "Start Building",
      discord: "Join Discord",
      whitepaper: "Read Whitepaper"
    },
    footer: {
      description: "Blockchain for challengers - Building a fair, transparent, and performance-driven network.",
      network: "Network",
      developers: "Developers",
      community: "Community",
      copyright: "© 2024 OLYM3. All rights reserved.",
      terms: "Terms",
      privacy: "Privacy",
      contact: "Contact"
    }
  },
  vi: {
    nav: {
      home: "Trang chủ",
      consensus: "Đồng thuận",
      roadmap: "Lộ trình",
      team: "Đội ngũ",
      ecosystem: "Hệ sinh thái"
    },
    hero: {
      title: "Blockchain cho Thách Thức",
      subtitle: "",
      description: "Olym3 là một nền tảng blockchain Layer 1 được thiết kế dành riêng cho những \"người thách thức\" – những cá nhân và tổ chức đang phá vỡ các giới hạn cũ để xây dựng tương lai mới.",
      buildButton: "Xây dựng trên OLYM3",
      joinButton: "Tham gia Cộng đồng",
      stats: {
        mechanisms: "Cơ chế Đồng thuận",
        launch: "Ra mắt Mainnet",
        compatible: "Tương thích"
      }
    },
    vision: {
      title: "Tầm Nhìn",
      description: "Olym3 hướng tới việc xây dựng một hệ sinh thái Web3 mang đậm bản sắc Việt Nam, nơi những người có thực lực và đóng góp được vinh danh bằng chính uy tín và cống hiến của họ.",
      differentiators: "Điểm Khác Biệt",
      merit: "Hệ thống xác thực dựa trên năng lực",
      community: "Hệ thống danh tiếng do cộng đồng điều hành",
      evm: "Tương thích EVM để tích hợp liền mạch"
    },
    consensus: {
      title: "Ba Cơ chế Đồng thuận Sáng tạo",
      description: "Olym3 giới thiệu ba cơ chế đồng thuận cách mạng tưởng thưởng cho năng lực, đóng góp và uy tín",
      poc1: {
        title: "Proof of Challenge",
        subtitle: "PoC1",
        description: "Tham gia các thử thách có tiêu chuẩn cụ thể (hackathon, AI challenge, DeFi mission...) để chứng minh khả năng giải quyết vấn đề. Smart contract ghi nhận kết quả minh bạch và không thể chối cãi.",
        features: ["Tham gia Hackathon", "Thách thức AI", "Nhiệm vụ DeFi"]
      },
      poc2: {
        title: "Proof of Contribution",
        subtitle: "PoC2",
        description: "Ghi nhận các hành động đóng góp có giá trị cho cộng đồng như: viết tài liệu, phát triển ứng dụng, hỗ trợ người dùng, phát triển hạ tầng. Mỗi đóng góp được định lượng và đánh giá bởi cộng đồng và các DAO.",
        features: ["Tài liệu", "Phát triển Ứng dụng", "Hỗ trợ Cộng đồng"]
      },
      por: {
        title: "Proof of Reputation",
        subtitle: "PoR",
        description: "Dựa trên lịch sử thách thức và đóng góp, mỗi tài khoản được gán điểm danh tiếng. Reputation không thể mua, chỉ có thể xây dựng qua thời gian và hành động thật.",
        features: ["Hiệu suất Lịch sử", "Xác thực Cộng đồng", "Quyền hạn Kiếm được"]
      }
    },
    useCases: {
      title: "Ứng dụng Thực tế",
      competitions: {
        title: "Cuộc thi Sinh viên",
        description: "Cuộc thi AI/Web3 dành cho sinh viên chứng minh kỹ năng và nhận sự công nhận"
      },
      dao: {
        title: "Quản lý DAO",
        description: "Quản lý grant DAO minh bạch với phân bổ dựa trên năng lực"
      },
      gaming: {
        title: "Game Play-to-Prove",
        description: "Game tích hợp thách thức nơi người chơi chứng minh khả năng của mình"
      },
      education: {
        title: "Nền tảng Giáo dục",
        description: "Hệ thống học và thi được hỗ trợ bởi xác minh blockchain"
      }
    },
    roadmap: {
      title: "Lộ trình Phát triển",
      q2: {
        title: "Ra mắt Testnet",
        description: "Khởi tạo testnet đầu tiên với các cơ chế PoC cơ bản được triển khai"
      },
      q3: {
        title: "Hệ sinh thái Thách thức",
        description: "Tổ chức 10+ thử thách AI/Web3 và xây dựng cộng đồng nhà phát triển"
      },
      q4: {
        title: "Ra mắt Mainnet",
        description: "Triển khai mainnet chính thức với đầy đủ cơ chế đồng thuận"
      },
      "2026": {
        title: "Mở rộng Đông Nam Á",
        description: "Mở rộng hệ sinh thái tới Đông Nam Á với các đối tác chiến lược"
      }
    },
    team: {
      title: "Đội ngũ & Cố vấn",
      description: "Olym3 được sáng lập bởi nhóm nhà phát triển, cố vấn và nhà tổ chức hackathon tại Việt Nam, kết nối trực tiếp với các trường đại học, cộng đồng blockchain và tổ chức đào tạo AI.",
      core: {
        title: "Đội ngũ Phát triển Cốt lõi",
        description: "Các nhà phát triển blockchain có kinh nghiệm chuyên về cơ chế đồng thuận và phát triển hợp đồng thông minh"
      },
      academic: {
        title: "Cố vấn Học thuật",
        description: "Các giáo sư và nhà nghiên cứu từ các trường đại học hàng đầu Việt Nam chuyên về AI và blockchain"
      },
      community: {
        title: "Lãnh đạo Cộng đồng",
        description: "Nhà tổ chức hackathon và người xây dựng cộng đồng với mối liên hệ sâu rộng trong hệ sinh thái công nghệ Việt Nam"
      }
    },
    architecture: {
      title: "Kiến trúc Hệ thống",
      evm: {
        title: "Layer 1 tương thích EVM",
        description: "Tương thích hoàn toàn với Ethereum Virtual Machine cho việc triển khai dApp và tích hợp cross-chain liền mạch"
      },
      validators: {
        title: "Validator Phi tập trung",
        description: "Mạng validator có trọng số danh tiếng đảm bảo sản xuất block công bằng và dựa trên năng lực"
      },
      sdk: {
        title: "SDK Mở",
        description: "SDK thân thiện với nhà phát triển cho phép tích hợp dễ dàng các cơ chế Proof of Challenge vào nền tảng hiện có"
      }
    },
    cta: {
      title: "Tham gia Cuộc cách mạng OLYM3",
      description: "Olym3 không chỉ là một blockchain. Đó là sân chơi công bằng cho mọi tài năng được chứng minh bằng thực lực, đóng góp và uy tín. Cùng xây dựng tương lai, nơi công nghệ và năng lực là thước đo thành công.",
      build: "Bắt đầu Xây dựng",
      discord: "Tham gia Discord",
      whitepaper: "Đọc Whitepaper"
    },
    footer: {
      description: "Blockchain cho thách thức - Xây dựng mạng lưới công bằng, minh bạch và định hướng hiệu suất.",
      network: "Mạng lưới",
      developers: "Nhà phát triển",
      community: "Cộng đồng",
      copyright: "© 2024 OLYM3. Tất cả quyền được bảo lưu.",
      terms: "Điều khoản",
      privacy: "Riêng tư",
      contact: "Liên hệ"
    }
  }
};

export function getNestedTranslation(obj: Translation, path: string): string {
  const keys = path.split('.');
  let current: any = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return path; // Return the path if translation not found
    }
  }
  
  return typeof current === 'string' ? current : path;
}
