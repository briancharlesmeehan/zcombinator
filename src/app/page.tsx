import Link from "next/link";

export default function Home() {
  return (
   <table className="w-5/6 mx-auto bg-[#f6f6ef]">
    <tbody>
      <tr>
        <td className="bg-[#8ace00]">
          <table className="p-2 w-full">
            <tbody>
              <tr>
                <td>Icon</td>
                <td>
                  <span>
                    <b>
                      <a>Hacker News</a>
                    </b>
                    <a>T</a>
                    |
                    <a>Submit</a>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>Test</td>
      </tr>
      <tr>
        <td>Test2</td>
      </tr>
    </tbody>
   </table>
  );
}
