<template>
  <div class="starry-sky">
    <!-- 卡片列表展示论文和相关笔记信息 -->
    <n-list :show-divider="false" class="starry-sky__paper-list">
      <template #header>
        文献
      </template>

      <template #footer>
        需要footer吗？可以做成滚动到底部加载下一页，到最后说“我也是有底线的！”
      </template>
      <n-card hoverable class="starry-sky__paper-card aspire_shadow" v-for="(paper, i) in paperCardInfoList">
        <n-list-item>
          <template #prefix>
            <n-image
              width="200"
              :src="paper.img"
            />
          </template>
          <template #suffix>
            <n-button  @click="showIntroDrawer = !showIntroDrawer">
              介绍
            </n-button>
          </template>
            {{ paper.name }}
            {{ paper.date }}
            {{ paper.appear }}
            {{ paper.authors }}
            {{ paper.paperlink }}
            {{ paper.abstract }}
            {{ paper.keywords }}
            {{ paper.notes }}
        </n-list-item>
      </n-card>
    </n-list>
    <!-- 论文简介（作者、发表期刊、年限、摘要、被引用次数、笔记数） + 评论 + 前几笔记介绍列表 -->
    <n-drawer
      v-model:show="showIntroDrawer"
      :default-width="350"
      resizable
      :show-mask="false"
    >
    <!-- TODO 这里直接paper.name会有问题 -->
      <n-drawer-content title="paper.name" :native-scrollbar="false">
        《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      // 点击简介后，右侧展开
      showIntroDrawer: ref(false), 
      // 论文卡片信息列表
      paperCardInfoList: [
        {
          name: 'This is the paper title for testing to test the card effect',
          img: '/src/assets/test/paper_card_0.jpg',
          date: '5 Feb 2023', // 发表日期
          appear: 'ICLR', // 发表机构
          authors: ['Álvaro Sadee Jiménez', 'Naskdsia Valm', 'Alba Sageo', 'Bavas Test'],
          parperLink: 'https://arxiv.org/pdf/2023.0212v1.pdf',
          abstract: 'Diffusion methods have been proven to be very effective to generate images while conditioning on a text prompt. However, and although the quality of the generated images is unprecedented, these methods seem to struggle when trying to generate specific image compositions. In this paper we present Mixture of Diffusers, an algorithm that builds over existing diffusion models to provide a more detailed control over composition. By harmonizing several diffusion processes acting on different regions of a canvas, it allows generating larger images, where the location of each object and style is controlled by a separate diffusion process.',
          keywords: ['image caption', 'image generate', 'computer vision'],
          notes: [
            {
              name: 'This is the note title for testing to test the card effect',
              data: '20 Feb 2023',
              authors: ['Ming Xiao', 'San Zhang', 'Si Li'],
              heat: 2048, // 热度
            }
          ]
        },
        {
          name: 'This is the paper title for testing to test the card effect',
          img: '/src/assets/test/paper_card_0.jpg',
          date: '5 Feb 2023', // 发表日期
          appear: 'ICLR', // 发表机构
          authors: ['Álvaro Sadee Jiménez', 'Naskdsia Valm', 'Alba Sageo', 'Bavas Test'],
          parperLink: 'https://arxiv.org/pdf/2023.0212v1.pdf',
          abstract: 'Diffusion methods have been proven to be very effective to generate images while conditioning on a text prompt. However, and although the quality of the generated images is unprecedented, these methods seem to struggle when trying to generate specific image compositions. In this paper we present Mixture of Diffusers, an algorithm that builds over existing diffusion models to provide a more detailed control over composition. By harmonizing several diffusion processes acting on different regions of a canvas, it allows generating larger images, where the location of each object and style is controlled by a separate diffusion process.',
          keywords: ['image caption', 'image generate', 'computer vision'],
          notes: [
            {
              name: 'This is the note title for testing to test the card effect',
              data: '20 Feb 2023',
              authors: ['Ming Xiao', 'San Zhang', 'Si Li'],
              heat: 2048, // 热度
            }
          ]
        },
        {
          name: 'This is the paper title for testing to test the card effect',
          img: '/src/assets/test/paper_card_0.jpg',
          date: '5 Feb 2023', // 发表日期
          appear: 'ICLR', // 发表机构
          authors: ['Álvaro Sadee Jiménez', 'Naskdsia Valm', 'Alba Sageo', 'Bavas Test'],
          parperLink: 'https://arxiv.org/pdf/2023.0212v1.pdf',
          abstract: 'Diffusion methods have been proven to be very effective to generate images while conditioning on a text prompt. However, and although the quality of the generated images is unprecedented, these methods seem to struggle when trying to generate specific image compositions. In this paper we present Mixture of Diffusers, an algorithm that builds over existing diffusion models to provide a more detailed control over composition. By harmonizing several diffusion processes acting on different regions of a canvas, it allows generating larger images, where the location of each object and style is controlled by a separate diffusion process.',
          keywords: ['image caption', 'image generate', 'computer vision'],
          notes: [
            {
              name: 'This is the note title for testing to test the card effect',
              data: '20 Feb 2023',
              authors: ['Ming Xiao', 'San Zhang', 'Si Li'],
              heat: 2048, // 热度
            }
          ]
        },
        {
          name: 'This is the paper title for testing to test the card effect',
          img: '/src/assets/test/paper_card_0.jpg',
          date: '5 Feb 2023', // 发表日期
          appear: 'ICLR', // 发表机构
          authors: ['Álvaro Sadee Jiménez', 'Naskdsia Valm', 'Alba Sageo', 'Bavas Test'],
          parperLink: 'https://arxiv.org/pdf/2023.0212v1.pdf',
          abstract: 'Diffusion methods have been proven to be very effective to generate images while conditioning on a text prompt. However, and although the quality of the generated images is unprecedented, these methods seem to struggle when trying to generate specific image compositions. In this paper we present Mixture of Diffusers, an algorithm that builds over existing diffusion models to provide a more detailed control over composition. By harmonizing several diffusion processes acting on different regions of a canvas, it allows generating larger images, where the location of each object and style is controlled by a separate diffusion process.',
          keywords: ['image caption', 'image generate', 'computer vision'],
          notes: [
            {
              name: 'This is the note title for testing to test the card effect',
              data: '20 Feb 2023',
              authors: ['Ming Xiao', 'San Zhang', 'Si Li'],
              heat: 2048, // 热度
            }
          ]
        },
        {
          name: 'This is the paper title for testing to test the card effect',
          img: '/src/assets/test/paper_card_0.jpg',
          date: '5 Feb 2023', // 发表日期
          appear: 'ICLR', // 发表机构
          authors: ['Álvaro Sadee Jiménez', 'Naskdsia Valm', 'Alba Sageo', 'Bavas Test'],
          parperLink: 'https://arxiv.org/pdf/2023.0212v1.pdf',
          abstract: 'Diffusion methods have been proven to be very effective to generate images while conditioning on a text prompt. However, and although the quality of the generated images is unprecedented, these methods seem to struggle when trying to generate specific image compositions. In this paper we present Mixture of Diffusers, an algorithm that builds over existing diffusion models to provide a more detailed control over composition. By harmonizing several diffusion processes acting on different regions of a canvas, it allows generating larger images, where the location of each object and style is controlled by a separate diffusion process.',
          keywords: ['image caption', 'image generate', 'computer vision'],
          notes: [
            {
              name: 'This is the note title for testing to test the card effect',
              data: '20 Feb 2023',
              authors: ['Ming Xiao', 'San Zhang', 'Si Li'],
              heat: 2048, // 热度
            }
          ]
        },
        {
          name: 'This is the paper title for testing to test the card effect',
          img: '/src/assets/test/paper_card_0.jpg',
          date: '5 Feb 2023', // 发表日期
          appear: 'ICLR', // 发表机构
          authors: ['Álvaro Sadee Jiménez', 'Naskdsia Valm', 'Alba Sageo', 'Bavas Test'],
          parperLink: 'https://arxiv.org/pdf/2023.0212v1.pdf',
          abstract: 'Diffusion methods have been proven to be very effective to generate images while conditioning on a text prompt. However, and although the quality of the generated images is unprecedented, these methods seem to struggle when trying to generate specific image compositions. In this paper we present Mixture of Diffusers, an algorithm that builds over existing diffusion models to provide a more detailed control over composition. By harmonizing several diffusion processes acting on different regions of a canvas, it allows generating larger images, where the location of each object and style is controlled by a separate diffusion process.',
          keywords: ['image caption', 'image generate', 'computer vision'],
          notes: [
            {
              name: 'This is the note title for testing to test the card effect',
              data: '20 Feb 2023',
              authors: ['Ming Xiao', 'San Zhang', 'Si Li'],
              heat: 2048, // 热度
            }
          ]
        },
        {
          name: 'This is the paper title for testing to test the card effect',
          img: '/src/assets/test/paper_card_0.jpg',
          date: '5 Feb 2023', // 发表日期
          appear: 'ICLR', // 发表机构
          authors: ['Álvaro Sadee Jiménez', 'Naskdsia Valm', 'Alba Sageo', 'Bavas Test'],
          parperLink: 'https://arxiv.org/pdf/2023.0212v1.pdf',
          abstract: 'Diffusion methods have been proven to be very effective to generate images while conditioning on a text prompt. However, and although the quality of the generated images is unprecedented, these methods seem to struggle when trying to generate specific image compositions. In this paper we present Mixture of Diffusers, an algorithm that builds over existing diffusion models to provide a more detailed control over composition. By harmonizing several diffusion processes acting on different regions of a canvas, it allows generating larger images, where the location of each object and style is controlled by a separate diffusion process.',
          keywords: ['image caption', 'image generate', 'computer vision'],
          notes: [
            {
              name: 'This is the note title for testing to test the card effect',
              data: '20 Feb 2023',
              authors: ['Ming Xiao', 'San Zhang', 'Si Li'],
              heat: 2048, // 热度
            }
          ]
        },
        {
          name: 'This is the paper title for testing to test the card effect',
          img: '/src/assets/test/paper_card_0.jpg',
          date: '5 Feb 2023', // 发表日期
          appear: 'ICLR', // 发表机构
          authors: ['Álvaro Sadee Jiménez', 'Naskdsia Valm', 'Alba Sageo', 'Bavas Test'],
          parperLink: 'https://arxiv.org/pdf/2023.0212v1.pdf',
          abstract: 'Diffusion methods have been proven to be very effective to generate images while conditioning on a text prompt. However, and although the quality of the generated images is unprecedented, these methods seem to struggle when trying to generate specific image compositions. In this paper we present Mixture of Diffusers, an algorithm that builds over existing diffusion models to provide a more detailed control over composition. By harmonizing several diffusion processes acting on different regions of a canvas, it allows generating larger images, where the location of each object and style is controlled by a separate diffusion process.',
          keywords: ['image caption', 'image generate', 'computer vision'],
          notes: [
            {
              name: 'This is the note title for testing to test the card effect',
              data: '20 Feb 2023',
              authors: ['Ming Xiao', 'San Zhang', 'Si Li'],
              heat: 2048, // 热度
            }
          ]
        },
        {
          name: 'This is the paper title for testing to test the card effect',
          img: '/src/assets/test/paper_card_0.jpg',
          date: '5 Feb 2023', // 发表日期
          appear: 'ICLR', // 发表机构
          authors: ['Álvaro Sadee Jiménez', 'Naskdsia Valm', 'Alba Sageo', 'Bavas Test'],
          parperLink: 'https://arxiv.org/pdf/2023.0212v1.pdf',
          abstract: 'Diffusion methods have been proven to be very effective to generate images while conditioning on a text prompt. However, and although the quality of the generated images is unprecedented, these methods seem to struggle when trying to generate specific image compositions. In this paper we present Mixture of Diffusers, an algorithm that builds over existing diffusion models to provide a more detailed control over composition. By harmonizing several diffusion processes acting on different regions of a canvas, it allows generating larger images, where the location of each object and style is controlled by a separate diffusion process.',
          keywords: ['image caption', 'image generate', 'computer vision'],
          notes: [
            {
              name: 'This is the note title for testing to test the card effect',
              data: '20 Feb 2023',
              authors: ['Ming Xiao', 'San Zhang', 'Si Li'],
              heat: 2048, // 热度
            }
          ]
        },
        {
          name: 'This is the paper title for testing to test the card effect',
          img: '/src/assets/test/paper_card_0.jpg',
          date: '5 Feb 2023', // 发表日期
          appear: 'ICLR', // 发表机构
          authors: ['Álvaro Sadee Jiménez', 'Naskdsia Valm', 'Alba Sageo', 'Bavas Test'],
          parperLink: 'https://arxiv.org/pdf/2023.0212v1.pdf',
          abstract: 'Diffusion methods have been proven to be very effective to generate images while conditioning on a text prompt. However, and although the quality of the generated images is unprecedented, these methods seem to struggle when trying to generate specific image compositions. In this paper we present Mixture of Diffusers, an algorithm that builds over existing diffusion models to provide a more detailed control over composition. By harmonizing several diffusion processes acting on different regions of a canvas, it allows generating larger images, where the location of each object and style is controlled by a separate diffusion process.',
          keywords: ['image caption', 'image generate', 'computer vision'],
          notes: [
            {
              name: 'This is the note title for testing to test the card effect',
              data: '20 Feb 2023',
              authors: ['Ming Xiao', 'San Zhang', 'Si Li'],
              heat: 2048, // 热度
            }
          ]
        },
        {
          name: 'This is the paper title for testing to test the card effect',
          img: '/src/assets/test/paper_card_0.jpg',
          date: '5 Feb 2023', // 发表日期
          appear: 'ICLR', // 发表机构
          authors: ['Álvaro Sadee Jiménez', 'Naskdsia Valm', 'Alba Sageo', 'Bavas Test'],
          parperLink: 'https://arxiv.org/pdf/2023.0212v1.pdf',
          abstract: 'Diffusion methods have been proven to be very effective to generate images while conditioning on a text prompt. However, and although the quality of the generated images is unprecedented, these methods seem to struggle when trying to generate specific image compositions. In this paper we present Mixture of Diffusers, an algorithm that builds over existing diffusion models to provide a more detailed control over composition. By harmonizing several diffusion processes acting on different regions of a canvas, it allows generating larger images, where the location of each object and style is controlled by a separate diffusion process.',
          keywords: ['image caption', 'image generate', 'computer vision'],
          notes: [
            {
              name: 'This is the note title for testing to test the card effect',
              data: '20 Feb 2023',
              authors: ['Ming Xiao', 'San Zhang', 'Si Li'],
              heat: 2048, // 热度
            }
          ]
        },
        {
          name: 'This is the paper title for testing to test the card effect',
          img: '/src/assets/test/paper_card_0.jpg',
          date: '5 Feb 2023', // 发表日期
          appear: 'ICLR', // 发表机构
          authors: ['Álvaro Sadee Jiménez', 'Naskdsia Valm', 'Alba Sageo', 'Bavas Test'],
          parperLink: 'https://arxiv.org/pdf/2023.0212v1.pdf',
          abstract: 'Diffusion methods have been proven to be very effective to generate images while conditioning on a text prompt. However, and although the quality of the generated images is unprecedented, these methods seem to struggle when trying to generate specific image compositions. In this paper we present Mixture of Diffusers, an algorithm that builds over existing diffusion models to provide a more detailed control over composition. By harmonizing several diffusion processes acting on different regions of a canvas, it allows generating larger images, where the location of each object and style is controlled by a separate diffusion process.',
          keywords: ['image caption', 'image generate', 'computer vision'],
          notes: [
            {
              name: 'This is the note title for testing to test the card effect',
              data: '20 Feb 2023',
              authors: ['Ming Xiao', 'San Zhang', 'Si Li'],
              heat: 2048, // 热度
            }
          ]
        },
        {
          name: 'This is the paper title for testing to test the card effect',
          img: '/src/assets/test/paper_card_0.jpg',
          date: '5 Feb 2023', // 发表日期
          appear: 'ICLR', // 发表机构
          authors: ['Álvaro Sadee Jiménez', 'Naskdsia Valm', 'Alba Sageo', 'Bavas Test'],
          parperLink: 'https://arxiv.org/pdf/2023.0212v1.pdf',
          abstract: 'Diffusion methods have been proven to be very effective to generate images while conditioning on a text prompt. However, and although the quality of the generated images is unprecedented, these methods seem to struggle when trying to generate specific image compositions. In this paper we present Mixture of Diffusers, an algorithm that builds over existing diffusion models to provide a more detailed control over composition. By harmonizing several diffusion processes acting on different regions of a canvas, it allows generating larger images, where the location of each object and style is controlled by a separate diffusion process.',
          keywords: ['image caption', 'image generate', 'computer vision'],
          notes: [
            {
              name: 'This is the note title for testing to test the card effect',
              data: '20 Feb 2023',
              authors: ['Ming Xiao', 'San Zhang', 'Si Li'],
              heat: 2048, // 热度
            }
          ]
        },
        {
          name: 'This is the paper title for testing to test the card effect',
          img: '/src/assets/test/paper_card_0.jpg',
          date: '5 Feb 2023', // 发表日期
          appear: 'ICLR', // 发表机构
          authors: ['Álvaro Sadee Jiménez', 'Naskdsia Valm', 'Alba Sageo', 'Bavas Test'],
          parperLink: 'https://arxiv.org/pdf/2023.0212v1.pdf',
          abstract: 'Diffusion methods have been proven to be very effective to generate images while conditioning on a text prompt. However, and although the quality of the generated images is unprecedented, these methods seem to struggle when trying to generate specific image compositions. In this paper we present Mixture of Diffusers, an algorithm that builds over existing diffusion models to provide a more detailed control over composition. By harmonizing several diffusion processes acting on different regions of a canvas, it allows generating larger images, where the location of each object and style is controlled by a separate diffusion process.',
          keywords: ['image caption', 'image generate', 'computer vision'],
          notes: [
            {
              name: 'This is the note title for testing to test the card effect',
              data: '20 Feb 2023',
              authors: ['Ming Xiao', 'San Zhang', 'Si Li'],
              heat: 2048, // 热度
            }
          ]
        },
        {
          name: 'This is the paper title for testing to test the card effect',
          img: '/src/assets/test/paper_card_0.jpg',
          date: '5 Feb 2023', // 发表日期
          appear: 'ICLR', // 发表机构
          authors: ['Álvaro Sadee Jiménez', 'Naskdsia Valm', 'Alba Sageo', 'Bavas Test'],
          parperLink: 'https://arxiv.org/pdf/2023.0212v1.pdf',
          abstract: 'Diffusion methods have been proven to be very effective to generate images while conditioning on a text prompt. However, and although the quality of the generated images is unprecedented, these methods seem to struggle when trying to generate specific image compositions. In this paper we present Mixture of Diffusers, an algorithm that builds over existing diffusion models to provide a more detailed control over composition. By harmonizing several diffusion processes acting on different regions of a canvas, it allows generating larger images, where the location of each object and style is controlled by a separate diffusion process.',
          keywords: ['image caption', 'image generate', 'computer vision'],
          notes: [
            {
              name: 'This is the note title for testing to test the card effect',
              data: '20 Feb 2023',
              authors: ['Ming Xiao', 'San Zhang', 'Si Li'],
              heat: 2048, // 热度
            }
          ]
        }
      ]
    }
  }
})

</script>

<style>
.starry-sky {
  display: flex;
  justify-content: center;
}

.starry-sky__paper-list {
  width: 60%;
}

.starry-sky__paper-card {
  border-radius: 10px;
  margin: 20px auto;
  box-shadow: var(--aspire-box-shadow);

  transition: all .5s;
}

.starry-sky__paper-card:hover {
  transform: scale(1.005) translateY(-.08rem); 
}
</style>