export default async function invalidate(req, res) {

    const hostname = 'localhost'
    const port = 3000

    console.log('[Next.js] Invalidating...');
    let revalidated = false;
    try {
        // await res.unstable_revalidate('http://localhost:3000/');
        await res.unstable_revalidate('/');
        revalidated = true;
        res.json({
            revalidated,
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send('Error revalidating')
    }

}




// // pages/api/revalidate.js

// export default async function invalidate(req, res) {
//     // Check for secret to confirm this is a valid request
//     // if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
//     //   return res.status(401).json({ message: 'Invalid token' })
//     // }
  
//     try {
//       await res.unstable_revalidate('/')
//       return res.json({ revalidated: true })
//     } catch (err) {
//       // If there was an error, Next.js will continue
//       // to show the last successfully generated page
//       return res.status(500).send('Error revalidating')
//     }
//   }