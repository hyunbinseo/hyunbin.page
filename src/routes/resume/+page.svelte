<script lang="ts">
	import '../../tailwind.css';

	import 'pretendard/dist/web/variable/pretendardvariable.css';
	import 'print-friendly';
	import profile from './profile.avif';
</script>

<svelte:head>
	<title>서현빈 | 자기소개서 및 이력서</title>
	<meta name="robots" content="noindex" />
</svelte:head>

{#snippet anchor(text: string, href: string)}
	<a {href} target="_blank">{text}</a>
{/snippet}

<header class="mb-[2em] text-center text-smallish max-a4x:px-[2em]">
	직접 개발한 {@render anchor(
		'print-friendly',
		'https://github.com/hyunbinseo/print-friendly#readme'
	)}를 사용해 작성된,
	<span class="xxs:inline-block">종이와 스크린에 모두 최적화된 웹 문서입니다.</span>
</header>

<section class="page">
	<header class="flex h-40 justify-between">
		<div class="flex flex-col">
			<h1 class="text-2xl font-bold">공개적으로 기록하고 공유합니다.</h1>
			<p class="mt-0.5">오픈소스에 진심인 5년 차 개발자 서현빈입니다.</p>
			<ul class="mt-auto list-inside list-disc">
				<li>GitHub <a href="https://github.com/hyunbinseo/">@hyunbinseo</a></li>
				<li>LinkedIn <a href="https://www.linkedin.com/in/hyunbinseo/">@hyunbinseo</a></li>
				<li>Email <a href="mailto:hyunbin@duck.com">hyunbin@duck.com</a></li>
			</ul>
		</div>
		<img src={profile} class="aspect-square shrink-0 max-sm:hidden" alt="서현빈 증명사진" />
	</header>
	<article class="mt-10">
		<h2 class="text-xl font-semibold">소개</h2>
		<p class="mt-2">
			2016년, 성인이 되자마자 창업을 시작해 꾸준히 이어오고 있습니다. VR Haptic 기업인
			<a
				href="https://www.chosun.com/site/data/html_dir/2016/07/03/2016070301029.html"
				target="_blank">리얼햅틱스</a
			>를 시작으로, 현재는 '다양한학습자를위한(주)'를 공동 설립해 기술이사로 근무 중입니다. 창업을
			도구 삼아 세상의 문제를 해결하는데 늘 흥미를 느끼며, 최근에는 사회적 배려가 필요한 학습자에게 {@render anchor(
				'증거기반의 과학적 교수학습',
				'https://home.ebs.co.kr/ebsnews/menu2/newsVodView/noon/60428848/H'
			)}을 제공 중입니다. 이를 인정받아 2024년 {@render anchor(
				'예비 사회적 기업',
				'https://www.socialenterprise.or.kr/social/ente/resepConcept.do?m_cd=E008'
			)}으로 지정됐으며, 사회적 기업 인증을 준비하고 있습니다.
		</p>
	</article>
	<article class="mt-10">
		<h2 class="text-xl font-semibold">COO에서 CTO로</h2>
		<p class="mt-2">
			2020년부터 소프트웨어 개발을 독학해 지금은 자사 서비스를 직접 작성하는 기술이사가 되었습니다.
			그전까지는 운영총괄을 맡으며 신규 사업 제안, 투자 유치 등에 집중했으며, 그 과정에서 노무, 세무
			등 실무도 겸했었습니다.
		</p>
	</article>
	<article class="mt-10">
		<h2 class="text-xl font-semibold">"오픈소스 개발자, 창업가"</h2>
		<p class="mt-2">
			다소 모순적으로 보이는 두 가지를 모두 하고 있습니다. 소규모 스타트업에서는 이미 공개된
			오픈소스를 활용해서 빠르게 개발하고 사업화하는 것이 중요하다고 생각할 수 있으나, OSS를 활용한
			뒤 생각이 완전히 바뀌었습니다.
		</p>
		<section class="mt-9 border-l-[1px] pl-4">
			<h3 class="text-lg font-semibold">발견한 문제를 기록합니다.</h3>
			<p class="mt-4">
				오픈소스 소프트웨어 버그를 직접 수정하는 것이 유일하고 진정한 기여 방법이라고 생각했습니다.
				하지만 OSS를 사용하다 보니 겪은 문제나 제안을 공개적으로 기록하는 것 또한 중요함을 알게
				됐습니다. GitHub Issue 상에 게시된 글과 댓글을 통해 어떤 문제가 어떻게 해결되고 있는지를
				확인할 수 있기 때문입니다.
			</p>
			<p class="mt-4">
				그래서 개발 도중에 마주친 문제들은 검색해 본 뒤 무조건 시간을 들여 기록합니다. 이 과정에서
				확실하고 간결한 {@render anchor(
					'Minimal reproducible example',
					'https://en.wikipedia.org/wiki/Minimal_reproducible_example'
				)}을 작성하려고, 우회 방법을 찾아서 공유하려고 노력합니다. 이를 통해 커뮤니티 구성원의,
				그리고 비슷한 문제를 겪고 있을 제 시행착오를 줄일 수 있어서 보람을 느낍니다.
			</p>
		</section>
		<section class="mt-9 border-l-[1px] pl-4">
			<h3 class="text-lg font-semibold">직접 개발해서 공개합니다.</h3>
			<p class="mt-4">
				비슷한 맥락에서 "내가 반복해서 필요한데, 남들도 필요하지 않을까?"라는 생각을 가지고 새로운
				오픈소스 프로젝트를 만들기도 합니다. 구글 캘린더에 대한민국의 공휴일이 제대로 표시되지 않아
				만든 {@render anchor('공개 캘린더', 'https://github.com/hyunbinseo/holidays-kr')}, macOS
				파일을 윈도에 보내면 발생하는 자소 분리를 해결하는 {@render anchor(
					'자모야 모여라',
					'https://github.com/hyunbinseo/jamoya.one'
				)}가 대표적입니다. 이들을 꾸준히 유지보수하려고 노력하며, 새로운 개발 지식이나 신규 API를
				가장 먼저 적용하는 장으로 활용하고 있습니다.
			</p>
		</section>
	</article>
</section>

<section class="page">
	<article class="space-y-6">
		<h2 class="text-2xl font-semibold">경력 사항</h2>
		<section>
			<h3 class="text-lg font-semibold">다양한학습자를위한 주식회사</h3>
			<p>공동창업자, 기술이사 ('19/11 - 현재)</p>
			<div class="overflow-x-auto whitespace-nowrap">
				<ul class="mt-2.5 list-inside list-disc">
					<li>인천형 예비 사회적 기업 지정 (사회 서비스 제공형, 2024-2027)</li>
					<li>한국교원대학교 기초 문해 교육 온라인 시스템 공급 (2023-2024)</li>
					<li>(사)한국국제기아대책기구, 보호대상 아동 문해력 증진 사업 (2024)</li>
					<li>사회복지법인 기아대책, '온라인 기초학력 교실' 사업 (2021-2023)</li>
				</ul>
			</div>
		</section>
		<section>
			<h3 class="text-lg font-semibold">주식회사 리얼햅틱스</h3>
			<p>공동창업자, 운영총괄 ('16/07 - '18/06)</p>
			<div class="overflow-x-auto whitespace-nowrap">
				<ul class="mt-2.5 list-inside list-disc">
					<li>NIPA 가상현실 5대 선도 프로젝트 참여 (2016)</li>
					<li>롯데 액셀러레이터 L-Camp 1기 기업 선발 (2016)</li>
					<li>신용보증기금 TOP20 스타트업 선정 (2016)</li>
					<li>단국대학교 링크사업단 창업경진대회 대상 (2016)</li>
				</ul>
			</div>
		</section>
	</article>
	<hr class="my-6" />
	<article class="space-y-4">
		<h2 class="text-xl font-semibold">기술 스택</h2>
		<p>최근에는 SvelteKit, Drizzle ORM 프로젝트를 Node.js VPS 상에 배포하고 있습니다.</p>
		<ul class="list-inside list-disc">
			<li>TypeScript, JavaScript (JSDoc)</li>
			<li>
				<strong>FE:</strong>
				Svelte, Tailwind CSS, HTML, CSS
			</li>
			<li>
				<strong>BE:</strong>
				Node.js, SvelteKit, Drizzle ORM
			</li>
			<li>
				<strong>SaaS:</strong>
				Cloudflare Pages (Serverless)
			</li>
		</ul>
	</article>
	<hr class="my-6" />
	<article class="space-y-4">
		<h2 class="text-xl font-semibold">등록 특허</h2>
		<div class="overflow-auto whitespace-nowrap">
			<table class="patents">
				<thead class="sr-only">
					<tr>
						<th>등록번호</th>
						<th>발명의 명칭</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{@render anchor('1026927010000', 'https://doi.org/10.8080/1020160170229')}</td>
						<td>집단 물리 상호작용을 위한 미들웨어 장치 및 시스템</td>
					</tr>
					<tr>
						<td>{@render anchor('1026715120000', 'https://doi.org/10.8080/1020170022017')}</td>
						<td>화상 정보를 이용한 햅틱 효과 출력 시스템 및 방법</td>
					</tr>
					<tr>
						<td>{@render anchor('1026812690000', 'https://doi.org/10.8080/1020160178841')}</td>
						<td>
							워치 타입 이동통신 단말을 위한 가상 및 증강현실 구동 장치, <br />
							이를 이용한 인터페이스 시스템 및 방법
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</article>
	<hr class="my-6" />
	<article class="space-y-4">
		<h2 class="text-xl font-semibold">학력 및 병역</h2>
		<ul class="list-inside list-disc">
			<li>서울대학교 {@render anchor('자유전공학부', 'https://cls.snu.ac.kr')}</li>
			<li>2025년 8월 학사 졸업 예정</li>
			<li>{@render anchor('연합전공 정보문화학', 'https://isc.snu.ac.kr/')}, 경제학 주전공</li>
			<li>육군 이병 보충역 복무만료 (소집해제)</li>
		</ul>
	</article>
</section>

<footer class="mt-[2em] text-center text-smallish max-a4x:px-[2em]">
	본 자기소개서 및 이력서의 소스코드는
	<span class="xxs:inline-block">
		{@render anchor(
			'GitHub',
			'https://github.com/hyunbinseo/hyunbin.page/blob/main/src/routes/resume/%2Bpage.svelte'
		)}에서 확인하실 수 있습니다.
	</span>
</footer>

<style lang="postcss">
	:root {
		background-color: rgb(246, 248, 250);
		font-family: 'Pretendard Variable', sans-serif;
	}
	a {
		@apply cursor-pointer text-[#0000EE] underline visited:text-[#551A8B] active:text-[#FF0000];
	}
	table.patents > tbody > tr > td:first-child {
		@apply pr-4 align-top font-mono;
	}
	@page {
		size: A4 portrait;
		margin: 0.5in;
	}
	@media print {
		:root {
			@apply break-keep;
		}
	}
	@media screen {
		:root {
			@apply a4:break-keep;
			--page-width: 21cm;
			--page-height: 29.7cm;
			--page-padding: 0.25in;
			--page-gap-y: 0.5in;
		}
		.page {
			@apply shadow;
		}
	}
	@media screen and (min-width: 23.54cm) {
		:root {
			--page-min-height: var(--page-height);
			--page-padding: 0.5in;
			--page-gap-y: 0.75in;
		}
	}
</style>
