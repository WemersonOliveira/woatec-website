/** Original decorative SVG, not an official brand asset or a geographic data map. */
export function DigitalGlobe() {
  return (
    <div className="globe-composition">
      <div className="globe-kicker">
        <span /> TECNOLOGIA QUE APROXIMA
      </div>
      <svg
        className="digital-globe"
        viewBox="0 0 600 540"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id="ocean" cx=".32" cy=".27" r=".78">
            <stop stopColor="#294564" />
            <stop offset=".55" stopColor="#102942" />
            <stop offset="1" stopColor="#031020" />
          </radialGradient>
          <linearGradient
            id="land"
            x1="140"
            y1="100"
            x2="410"
            y2="420"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f1d49c" />
            <stop offset=".55" stopColor="#d9ad62" />
            <stop offset="1" stopColor="#866235" />
          </linearGradient>
          <radialGradient id="rim" cx=".25" cy=".22" r=".85">
            <stop offset=".65" stopColor="#061321" stopOpacity="0" />
            <stop offset="1" stopColor="#020812" stopOpacity=".8" />
          </radialGradient>
          <clipPath id="globe-clip">
            <circle cx="300" cy="260" r="205" />
          </clipPath>
          <pattern
            id="land-dots"
            width="7"
            height="7"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r=".9" fill="#051426" fillOpacity=".45" />
          </pattern>
          <g id="continents">
            <path d="M112 163 130 142 146 137 156 115 180 101 206 96 223 105 233 125 222 142 231 157 215 175 209 194 194 201 195 217 180 222 175 239 187 248 193 266 208 275 216 290 206 294 194 282 182 277 173 260 159 249 147 223 134 212 125 186Z" />
            <path d="m216 295 22-12 27 7 14 13 21 5 11 17-8 25-17 13-9 23-13 18-11 30-12 20-9 5-7-23 3-26-8-24 1-27-10-19-7-18Z" />
            <path d="m232 80 25-16 29 1 13 15-12 20-15 12-9 20-18-10-6-23Z" />
            <path d="m334 184 8-15 16-7 10-21 12-8 3 19-8 19 9 7 17-10 13 7 15-4 26 16 20 12 16 20 7 25-12 10-18-12-14-18-16-2-9 13-18-3-10-13-18-6-9 9-15-4-14 10-20-6-4-14 16-7Z" />
            <path d="m345 224 24-5 26 8 16 21 19 6 10 23 22 4-9 19-23 14-8 29-19 31-16 17-14-11-6-31-13-23-6-24-21-3-12-17 2-25Z" />
            <path d="m445 342 5 11-4 25-8 10-2-17Z" />
            <path d="m331 168 5-10 4 8-2 12-7 4Zm-8 14 5-5 3 10-5 5Z" />
          </g>
        </defs>
        <ellipse
          cx="305"
          cy="473"
          rx="144"
          ry="12"
          fill="#020812"
          opacity=".55"
        />
        <circle
          cx="300"
          cy="260"
          r="205"
          fill="url(#ocean)"
          stroke="#627890"
          strokeOpacity=".6"
        />
        <g clipPath="url(#globe-clip)">
          <g stroke="#7997af" strokeOpacity=".2" strokeWidth=".7">
            <ellipse cx="300" cy="260" rx="78" ry="205" />
            <ellipse cx="300" cy="260" rx="151" ry="205" />
            <ellipse cx="300" cy="260" rx="205" ry="62" />
            <ellipse cx="300" cy="260" rx="205" ry="135" />
            <path d="M95 260h410M300 55v410M112 177q188 70 376 0M112 343q188-70 376 0" />
          </g>
          <use
            href="#continents"
            fill="url(#land)"
            stroke="#f0d49a"
            strokeWidth=".6"
            strokeLinejoin="round"
          />
          <use href="#continents" fill="url(#land-dots)" />
          <circle cx="300" cy="260" r="205" fill="url(#rim)" />
          <g stroke="#f4d9a6" strokeWidth="1.1">
            <path
              d="M247 347Q253 159 359 202M359 202Q310 189 183 202M247 347Q385 351 390 276"
              strokeDasharray="3 5"
              opacity=".65"
            />
          </g>
          <g
            fill="#fff0d0"
            stroke="#d9ad62"
            strokeWidth="5"
            strokeOpacity=".25"
          >
            <circle cx="247" cy="347" r="4" />
            <circle cx="359" cy="202" r="4" />
            <circle cx="183" cy="202" r="3" />
            <circle cx="390" cy="276" r="3" />
          </g>
        </g>
        <path
          d="M99 321C25 374 123 431 309 371S573 242 501 222"
          stroke="#d9ad62"
          strokeOpacity=".55"
          strokeWidth="1"
        />
        <path
          d="M125 134h-45v37M478 390h44v-37"
          stroke="#8495a9"
          strokeOpacity=".4"
        />
        <g
          fill="#aebbc9"
          fontFamily="sans-serif"
          fontSize="9"
          letterSpacing="2"
        >
          <text x="62" y="122">
            ESTRATÉGIA
          </text>
          <text x="438" y="414">
            CONEXÃO
          </text>
        </g>
      </svg>
      <div className="globe-caption">
        <span>Presença. Conexão. Possibilidades.</span>
        <small>Ilustração conceitual</small>
      </div>
    </div>
  );
}
