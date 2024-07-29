gsap.set(`[data-effect="fade"]`, { opacity: 0 });
gsap.set(`[data-size="scale"]`, { scale: 0.85 });
gsap.set('[data-move="y-move', { yPercent: -100 });
gsap.set('[data-move="y-move-plus', { yPercent: 100 });

let imgEl = ``;
for (let i = 0; i < 64; i++) {
  const firstClass = i == 0 ? "on" : "";
  imgEl += `<img class="${firstClass}" src="./assets/images/${i
    .toString()
    .padStart(4, "0")}.png" alt>`;
}

$(".sequence-area").html(imgEl);

const lodding = gsap.timeline({});

lodding.to(".sc-intro .sequence-area", {
  opacity: 1
},)

lodding.to(".sc-intro .sequence-area", {
  scale: 1, y: 0, duration: 1
}, "text")

lodding.to(".sc-intro .title-area h1", {
  scale: 1,
  y: 0,
  opacity: 1,
  duration: 1,
}, "text");

lodding.from(".sc-intro .btn-area a", { y: -100, opacity: 0, duration: 1 }, "text");

const introTitle = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-intro",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0,
      // markers: true,
      onEnter: function () {
        $(".lng").addClass("active");
      },
      onLeaveBack: function () {
        $(".lng").removeClass("active");
      },
    },
  })
  .to(".sc-intro .title-area", 1, { scale: 1.15 })
  .to(".sc-intro .btn-area", { opacity: 0, duration: 2 }, "title")
  .to(".sc-intro .title-area", { opacity: 0, duration: 2 }, "title+=0.5")
  .to(".sc-intro .sub-title-area", {
    opacity: 1,
    scale: 1,
    duration: 1,
  })
  .to(".sc-intro", { opacity: 0 });

const introImg = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-intro",
    start: "0% 0%",
    end: "80% 100%",
    scrub: 0,
    // markers: true,
    onUpdate: function (self) {
      imgLength = $(".sequence-area img").length - 1;
      idx = Math.floor(self.progress * imgLength);

      $(".sequence-area img")
        .eq(idx)
        .addClass("on")
        .siblings()
        .removeClass("on");

      idx == 63 ? $(".sequence-area img").removeClass("on") : '';
    },

  }
});
const visualText = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-visual .text-area",
      start: "0% 80%",
      end: "100% 100%",
      endTrigger: ".sc-visual",
      scrub: 0,
      //   markers: true,
    },
  })
  .to(".sc-visual .text-area .font1", { opacity: 0.12 }, "1")
  .to(".sc-visual .text-area .font2", { opacity: 1 }, "1")
  .to(".sc-visual .text-area .font2", { opacity: 0.12 }, "2")
  .to(".sc-visual .text-area .font3", { opacity: 1 }, "2")
  .to(".sc-visual .text-area .font3", { opacity: 0.12 }, "3")
  .to(".sc-visual .text-area .font4", { opacity: 1 }, "3")
  .to(".sc-visual .text-area .font4", { opacity: 0.12 }, "4")
  .to(".sc-visual .text-area .font5", { opacity: 1 }, "4")
  .to(".sc-visual .video-area", 1, { opacity: 0 });

ScrollTrigger.create({
  trigger: ".sc-audio .chip-area",
  start: "0% 60%",
  end: "100% 60%",
  scrub: 0,
  // markers: true,
  onEnter: function () {
    $(".chip-video")[0].play();
  },
  onEnterBack: function () {
    $(".chip-video")[0].play();
  },
});

const audioXray = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-audio .group-xray",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0,
      // markers: true,
    },
  })
  .to(".sc-audio .group-xray .xray1", { scale: 0.8, duration: 2 }, "xray1")
  .to(".sc-audio .group-xray .desc1", { opacity: 1, yPercent: -120 }, "xray1")
  .to(".sc-audio .group-xray .desc1", { opacity: 0 }, "xray1+=0.5")
  .to(
    ".sc-audio .group-xray .desc2",
    { opacity: 1, yPercent: -120 },
    "xray1+=1"
  )
  .to(".sc-audio .group-xray .desc2", { opacity: 0 }, "xray2")
  .to(".sc-audio .group-xray .xray1", { opacity: 0 }, "xray2")
  .to(
    ".sc-audio .group-xray .xray2",
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      onComplete: function () {
        $(".sc-audio .group-xray .video-area").addClass("active");
      },
    },
    "xray3"
  )
  .to(".sc-audio .group-xray .desc3", { opacity: 1, yPercent: -120 }, "xray3")
  .to(".sc-audio .group-xray .video-area .xray3", {
    scale: 0.8,
    onReverseComplete: function () {
      $(".sc-audio .group-xray .video-area").removeClass("active");
    },
  })
  .to(".sc-audio .group-xray", { opacity: 0 });

const noiseLine = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-noise .group-info .info-item.line",
      start: "0% 50%",
      end: "100% 100%",
      scrub: 0,
      // markers: true,
    },
  })
  .to(`.sc-noise .group-info [data-move="y-move"]`, { yPercent: 0 }, "line")
  .to(".sc-noise .info-item.line .img-wrap img", { y: 0, opacity: 1 }, "line");


const dancerVideo = document.querySelector('.dancer-video');
dancerVideo.addEventListener('loadedmetadata', function () {

  const sound = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sc-sound .group-dancer",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
        // markers: true,
        onUpdate: function (self) {
          dancerVideo.currentTime = dancerVideo.duration * self.progress;
        },
      },
    })
    .to(".sc-sound .group-dancer .desc1", { opacity: 1 })
    .to(".sc-sound .group-dancer .desc1", { opacity: 0 })
    .to(".sc-sound .group-dancer .desc2", { opacity: 1 })
    .to(".sc-sound .group-dancer .desc2", { opacity: 0 })
    .to(".sc-sound .group-dancer .desc3", { opacity: 1 })
    .to(".sc-sound .group-dancer .desc3", { opacity: 0 })
    .to(".sc-sound .group-dancer", { opacity: 0, duration: 0.5 });


});

const batteryVideo = document.querySelector('.battery-video');
batteryVideo.addEventListener('loadedmetadata', function () {

  const battery = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sc-battery .group-battery",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
        // markers: true,
        onUpdate: function (self) {
          batteryVideo.currentTime = batteryVideo.duration * self.progress;
        },
      },
    })
    .to(".sc-battery .desc1", { y: -20, opacity: 0 })
    .to(".sc-battery .desc2", { y: 0, opacity: 1 }, "desc1")
    .to(".sc-battery .desc2 .pin span", { yPercent: 0 }, "desc1")
    .to(".sc-battery .desc2", { y: -20, opacity: 0 }, "desc2")
    .to(".sc-battery .desc2 .pin span", { yPercent: 100 }, "desc2")
    .to(".sc-battery .desc3", { y: 0, opacity: 1 }, "desc3")
    .to(".sc-battery .desc3 .pin span", { yPercent: 0 }, "desc3")
    .to(".sc-battery .desc3", { y: -20, opacity: 0 }, "desc4")
    .to(".sc-battery .desc3 .pin span", { yPercent: 100 }, "desc4")
    .to(".sc-battery .desc4", { y: 0, opacity: 1 });
});

const experience = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-experience .group-info",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0,
      // markers: true,
    },
  })
  .to(".sc-experience .group-info .airpods", { opacity: 1, scale: 1 }, "first")
  .to(".sc-experience .group-info .phone-bg", { opacity: 1 }, "first+=0.3")
  .to(".sc-experience .group-info .phone-img1", { opacity: 1 }, "first+=0.3")
  .to(".sc-experience .group-info .desc1", { opacity: 1, y: 0 }, "first+=0.3")
  .to(".sc-experience .group-info .desc1", { opacity: 0, y: -20 })
  .to(".sc-experience .group-info .desc2", {
    opacity: 1,
    y: 0,
    onStart: function () {
      $(".sc-experience .group-info .phone-img1").addClass("remove");
      $(".sc-experience .group-info .phone-img2").addClass("active");
    },
    onReverseComplete: function () {
      $(".sc-experience .group-info .phone-img1").removeClass("remove");
      $(".sc-experience .group-info .phone-img2").removeClass("active");
    },
  });


const mm = gsap.matchMedia();
mm.add("(min-width: 881px)", () => {
  const noiseTips = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sc-noise .group-info .info-item.tips",
        start: "0% 50%",
        end: "120% 100%",
        scrub: 0,
        // markers: true,
      },
    })
    .to(
      `.sc-noise .group-info .info-item.tips [class*="tips"] img`,
      { x: 0, stagger: 0.2 },
      "img"
    )
    .to(
      `.sc-noise .group-info .info-item [data-effect="fade"]`,
      { opacity: 1, stagger: 0.2 },
      "img"
    );
});

mm.add("(max-width: 880px)", () => {
  gsap.set(`.sc-noise .img-box [data-effect="fade"]`, { opacity: 1 });

  const noiseTips = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sc-noise .group-info .info-item.tips",
        start: "0% 50%",
        end: "200% 100%",
        scrub: 0,
        // markers: true,
        invalidateOnRefresh: true,
      },
    }).to(".sc-noise .group-info .tips-list", {
      xPercent:-100,
      x: function () {
        return $(".sc-noise .group-info .tips-list").outerWidth() / 2;
      },
    })
});


mm.add("(max-width: 580px)", () => {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('.lng').css("top","0px");
    } else {
      $('.lng').css("top","48px");
    }
  });
})

$("#footer .fnb .fnb-title").click(function () {
  console.log("123");
  if ($(this).parent(".fnb-item").hasClass("active")) {
    $(this).parent(".fnb-item").removeClass("active");
  } else {
    $("#footer .fnb .fnb-item").removeClass("active");
    $(this).parent(".fnb-item").addClass("active");
  }
})