import type { GlobalProps } from "minista"

export default function ({ title }: GlobalProps) {
  return (
    <>
      <div className="drawer">
        <input id="drawer" type="checkbox" className="m-3 drawer-toggle" />

        <div className="drawer-side">
          <label for="drawer" className="drawer-overlay"></label>
          <ul className="p-4 w-60 h-full menu bg-base-200 text-base-content">
            <p className="mb-2 text-2xl">{title}</p>

            <div tabIndex={0} className="collapse collapse-arrow bg-base-200">
              <div className="m-1 text-xl font-medium">Tutorial</div>
              <div className="collapse-content">
                <ul className="mt-4">
                  <li>
                    <a href="">Introdaction</a>
                  </li>
                </ul>
              </div>

              <div tabIndex={0} className="collapse collapse-arrow bg-base-200">
                <div className="m-1 text-xl font-medium">Manual</div>
                <div className="collapse-content">
                  <ul className="mt-4">
                    <li>
                      <a href="">CheatSheet</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div tabIndex={0} className="collapse collapse-arrow bg-base-200">
                <div className="m-1 text-xl font-medium">Community</div>
                <div className="collapse-content">
                  <ul className="mt-4">
                    <li>
                      <a href="">GitHub</a>
                      <a href="">Twitter</a>
                      <a href="">Discard</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}
