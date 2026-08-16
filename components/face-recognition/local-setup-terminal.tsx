import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/registry/magicui/terminal";

export function LocalSetupTerminal() {
  return (
    <Terminal>
      <TypingAnimation delay={0}>$ git clone https://github.com/danadorn/face-recognition.git</TypingAnimation>

      <AnimatedSpan delay={900} className="text-primary">
        Cloning into &apos;face-recognition&apos;...
      </AnimatedSpan>

      <TypingAnimation delay={1600}>$ cd face-recognition</TypingAnimation>

      <TypingAnimation delay={2400}>$ python -m venv .venv</TypingAnimation>

      <TypingAnimation delay={3200}>$ source .venv/bin/activate</TypingAnimation>

      <TypingAnimation delay={4000}>$ pip install -r requirements.txt</TypingAnimation>

      <AnimatedSpan delay={5000} className="text-stone-400">
        Installing Streamlit, OpenCV, OpenVINO, ArcFace, and NumPy...
      </AnimatedSpan>

      <TypingAnimation delay={5800}>$ streamlit run app.py</TypingAnimation>

      <AnimatedSpan delay={6800} className="text-primary">
        Local URL: http://localhost:8501
      </AnimatedSpan>
    </Terminal>
  );
}
