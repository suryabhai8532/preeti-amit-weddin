      {/* FOOTER */}

      <footer
        className="py-20 px-6 text-center text-white"
        style={{
          background: COLORS.darkVelvet,
        }}
      >
        <Heart className="mx-auto fill-current" />

        <div className="script text-6xl mt-4">
          Preeti & Amit
        </div>

        <p className="mt-3 opacity-60">
          {wedding.hashtag}
        </p>

        <p className="text-[10px] uppercase tracking-[.3em] opacity-45 mt-10">
          Made with love
        </p>
      </footer>
    </main>
  );
}
